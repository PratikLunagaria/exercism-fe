import {List} from "./list";
import {ListFooter} from "./footer";
import {ListHeader} from "./header";
import {listParamsDefault} from "../../const";
import {useEffect, useState} from "react";
import {getTestimonials} from "../../api";

export const Testimonials = () => {
    const [filteredList, setFilteredList] = useState([])
    const [listParams, setListParams] = useState(listParamsDefault)

    useEffect(()=>{
        let isSubscribed = true
        if(isSubscribed){
            getTestimonials(listParams)
                .then((res) => setFilteredList(res.data?.testimonials?.results))
                .catch(err=> console.error(err));
        }
        return () => isSubscribed = false
    }, [listParams])

    return (
        <div className={"shadow-2xl border-2 min-w-fit flex flex-col rounded-xl mx-9 mb-9 h-4/5"}>
            <ListHeader {...{listParams, setListParams}}/>
            <List list={filteredList}/>
            <ListFooter/>
        </div>
    )
}
