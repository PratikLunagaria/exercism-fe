import {Fragment, useState} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {ArrowDownIcon} from "../../../../assets/testimonials";


export const TrackDropdown = ({list}) => {
	const [current, setCurrent] = useState(list[0])

	return (
		<div className="w-72 font-semibold">
			<Listbox value={current} onChange={setCurrent}>
				<div className="relative">
					<Listbox.Button
						className="relative  py-2 pl-3 pr-10 text-left bg-white rounded-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
						<span className="block truncate">
							<img className={"h-10 w-10"}  alt={current.slug && current.slug} src={current.icon_url && current.icon_url}  />
						</span>
						<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
							<img
								className={"ml-1 h-4 w-4 inline-flex align-middle"}
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
							className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{list.map((listElement) => (
								<Listbox.Option
									key={listElement.slug}
									className={({active}) =>
										`cursor-pointer select-none relative py-2 pl-10 pr-4 ${
											active ? 'bg-purple-100' : 'text-gray-900'
										}`
									}
									value={listElement}
								>
									{({selected}) => (
										<div>
											<div className={"flex items-center"}>
												<img className={"h-10 w-10"}  alt={listElement.slug && listElement.slug} src={listElement.icon_url && listElement.icon_url}  />
												<span className={'block truncate flex-1 px-2'}>
							                        {listElement.title}
						                        </span>
												<div className={"border rounded-full px-2 py-1 border-gray-400"}>{listElement.num_exercises}</div>
											</div>
											{
												selected ? (
													<span className="absolute inset-y-0 left-0 flex items-center pl-3 ">
														<div className={"flex items-center justify-center border border-purple-800 rounded-full w-5 h-5"}>
															<div className={"rounded-full w-2.5 h-2.5 bg-purple-800"}/>
														</div>
	                                                </span>
												) : <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
														<div className={"border border-purple-800 rounded-full w-5 h-5"}/>
	                                                </span>
											}
										</div>
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