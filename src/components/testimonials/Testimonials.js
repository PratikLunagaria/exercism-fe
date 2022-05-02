import {List} from "./list";
import {ListFooter} from "./footer";
import {ListHeader} from "./header";
import {trackList, testimonialsList} from "../../mock";
import {useFilter} from "../../hooks";

export const Testimonials = () => {
    const [filteredList, onFilter] = useFilter(testimonialsList?.testimonials?.results)
    return (
        <div className={"shadow-2xl border-2 min-w-fit flex flex-col rounded-xl mx-9 mb-9 h-4/5"}>
            <ListHeader {...{trackList, onFilter}}/>
            <List list={filteredList}/>
            <ListFooter/>
        </div>
    )
}
