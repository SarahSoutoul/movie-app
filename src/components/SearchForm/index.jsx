import {useState, useEffect} from "react";
import ShowList from "../ShowList";
import {useShow} from "../../contexts";

export default function SearchForm() {
    const [inputText, setInputText] = useState("");
    const [searchString, setSearchString] = useState("Gossip Girl");
    const { setShowData } = useShow();

    // Retrieve the value entered by user in the input
    function handleInput(e) {
        const inputValue = e.target.value;
        setInputText(inputValue)
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSearchString(inputText);
        setInputText("")
    }

    async function searchAPI() {
        // URL: /search/shows?q=:query
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`);
        const data = await response.json();
        const show = data.map(s => s.show);
        setShowData(show)
    }

    useEffect(() => {
        searchAPI()
    }, [searchString])

    // Once we have that value, we can make a request to the API using the value as the query


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder={searchString} type="text" onChange={handleInput} value={inputText} />
                <button type="submit">Search</button>
            </form>
            <ShowList />
        </>
    )
}