import ShowCard from "../ShowCard";
import {useShow} from "../../contexts";

export default function ShowList() {
    const {showData} = useShow()

    return (
        <>
            {showData.map(s => (s.image ? <ShowCard show={s} key={s.id} /> : ""))}
        </>
    )
}