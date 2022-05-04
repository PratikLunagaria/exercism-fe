import {Fragment, useState, useEffect} from 'react'
import {Listbox, Transition} from '@headlessui/react'
import {ArrowDownIcon} from "../../../../assets/testimonials";
import {getTracks} from "../../../../api";


export const TrackDropdown = ({listParams, handleTrackChange}) => {
	const [trackList, setTrackList] = useState([])
	let currentTrack = trackList.filter((trc)=> listParams?.track ? trc.slug === listParams?.track : trc.slug === 'all')[0]

	useEffect(() =>{
		if(trackList.length === 0){
			getTracks()
				.then((res)=> {
					let all = {
						slug: 'all',
						title: 'All',
						num_exercises: res?.data?.tracks?.reduce((accumulator, element)=>  accumulator + element.num_exercises,0),
						icon_url: 'https://svgshare.com/i/gqg.svg'
					}
					let allTracks = [all,...res.data.tracks]
					setTrackList(allTracks)
				})
				.catch(err=> console.error(err))
		}
	},[trackList.length])

	return (
		<div className="pr-2 font-semibold">
			<Listbox value={currentTrack} onChange={handleTrackChange}>
				<div className="relative">
					<Listbox.Button
						className="relative  py-2 pl-3 pr-10 text-left bg-white rounded-lg cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
						<span className="block truncate">
							<img className={"h-10 w-10"}  alt={currentTrack?.slug ? currentTrack.slug : ''} src={currentTrack?.icon_url ? currentTrack.icon_url : ''}  />
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
							className="absolute w-72 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{trackList?.map((listElement) => (
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
