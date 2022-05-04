import {useEffect, useState} from "react";
import {List} from "./list";
import {ListHeader} from "./header";
import {getTestimonials} from "../../api";
import {listParamsDefault} from "../../const";
import {ListFooter} from "./footer";

export const Testimonials = () => {
    const [pagination, setPagination] = useState({})
    const [filteredList, setFilteredList] = useState([])
    const [listParams, setListParams] = useState(listParamsDefault)

    useEffect(()=>{
        let isSubscribed = true
        if(isSubscribed){
            getTestimonials(listParams)
                .then((res) => {
                    setFilteredList(res.data?.testimonials?.results)
                    setPagination(res.data?.testimonials?.pagination)
                })
                .catch(err=> console.error(err));
        }
        return () => isSubscribed = false
    }, [listParams])

    return (
        <div className={"shadow-2xl border-2 min-w-fit flex flex-col rounded-xl mx-9 mb-9 h-4/5"}>
            <ListHeader {...{listParams, setListParams}}/>
            <List list={filteredList}/>
            <ListFooter {...{pagination,listParams,setListParams}}/>
        </div>
    )
}
