import {List} from "./list";
import {ListFooter} from "./footer";
import {ListHeader} from "./header";

export const Testimonials = () => {
    return (
        <div className={"shadow-2xl border-2 min-w-fit flex flex-col rounded-xl mx-9 mb-9 h-4/5"}>
            <ListHeader/>
            <List/>
            <ListFooter/>
        </div>
    )
}
