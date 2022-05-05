import {useEffect, useState, useCallback, useRef} from "react";
import {List} from "./list";
import {ListHeader} from "./header";
import {getTestimonials, getTracks} from "../../api";
import {listParamsDefault} from "../../const";
import {ListFooter} from "./footer";

export const Testimonials = () => {
    const [filteredList, setFilteredList] = useState([])
    const [pagination, setPagination] = useState({})
    const [listParams, setListParams] = useState(listParamsDefault)
    const [trackMetaList, setTrackMetaList] = useState([])
    const [loading, setLoading] = useState(false)
    const isInitialMount = useRef(true);

    const findTrackMeta = (trc,trcList) => trcList.filter(trcObj=> trcObj.slug === trc)[0];
    const addTrackCount = useCallback((trcObj, trc, trackCount) => ({...trcObj, track_counts: trackCount[trc]}),[])
    const fetchTestimonials = useCallback(() => {
        setLoading(true)
        getTestimonials(listParams)
            .then((res) => {
                setFilteredList(res.data?.testimonials?.results)
                setPagination(res.data?.testimonials?.pagination)
                setLoading(false)
            })
            .catch(err => {
                console.error(err)
                setLoading(false)
            })
    },[listParams])

    useEffect(() =>{
        if (isInitialMount.current) {
            isInitialMount.current = false;
            setLoading(true)
            getTestimonials(listParams)
                .then((res) => {
                    setFilteredList(res.data?.testimonials?.results)
                    setPagination(res.data?.testimonials?.pagination)
                    let tracksArr = res.data?.testimonials?.tracks
                    let trcCount = res.data?.testimonials?.track_counts
                    if(trackMetaList.length === 0){
                        getTracks()
                            .then((res)=> {
                                let filteredTracks = tracksArr.map(trc => addTrackCount(findTrackMeta(trc,res.data.tracks),trc, trcCount))
                                let all = {
                                    slug: 'all',
                                    title: 'All',
                                    track_counts: filteredTracks.reduce((accumulator, element)=>  accumulator + element.track_counts,0),
                                    icon_url: 'https://svgshare.com/i/gqg.svg'
                                }
                                let allTracks = [all,...filteredTracks]
                                setTrackMetaList(allTracks)
                            })
                            .catch(err=> console.error(err))
                    }
                    setLoading(false)
                })
                .catch(err=> {
                    setLoading(false)
                    console.error(err)
                });
        }
    },[addTrackCount, listParams, trackMetaList.length])

    useEffect(()=>{
        if (!isInitialMount.current) {
            fetchTestimonials()
        }
    },[fetchTestimonials])


    return (
        <div className={"shadow-2xl border-2 min-w-fit flex flex-col rounded-xl mx-9 mb-9 h-4/5 text-xs lg:text-base "}>
            <ListHeader {...{listParams, setListParams, trackMetaList}}/>
            <List {...{filteredList, loading}}/>
            <ListFooter {...{pagination,listParams, setListParams}}/>
        </div>
    )
}
