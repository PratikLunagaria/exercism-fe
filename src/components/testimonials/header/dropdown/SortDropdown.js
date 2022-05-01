import {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {ArrowDownIcon} from "../../../../assets/testimonials";

export const SortDropdown = ({list}) => {
	const [current, setCurrent] = useState(list[0])

	return (
		<div className="w-72 px-2">
			<Listbox value={current} onChange={setCurrent}>
				<div className="relative">
					<Listbox.Button
						className="focus:outline-none relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
						<span className="block truncate">{current.title}</span>
						<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
							<img
								className={"ml-1 h-6 w-6 inline-flex align-middle"}
								alt={"Profile menu"}
								src={ArrowDownIcon}
							/>
                        </span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options
							className="focus:outline-none z-10 absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm"
						>
							{list.map((person, personIdx) => (
								<Listbox.Option
									key={personIdx}
									className={({active}) =>
										`relative cursor-default select-none py-2 pl-10 pr-4 ${
											active ? 'bg-purple-100 text-gray-900' : 'bg-white text-gray-900'
										}`
									}
									value={person}
								>
									{({selected}) => (
										<>
					                        <span
						                        className={`block truncate ${
							                        selected ? 'font-semibold' : 'font-regular'
						                        }`}
					                        >
			                                    {person.title}
			                                </span>
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	)
}
