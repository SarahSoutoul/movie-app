import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import GalleryImage from '../GalleryImage';

export default function ShowGallery() {
    const [shows, setShows] = useState([]);

    useEffect(() => {
        displayShows()
    }, [])
 
    // Build a fetch request to the API
    async function displayShows() {
        const response = await fetch("https://api.tvmaze.com/shows")
        const data = await response.json()
        setShows(data)
    }


    // Store the data into the state

    // Map through the data and render a card/div for each tv show


    return (
        <div className="shows">
            {shows.map((show) => 
                <Link to={`${show.id}`} key={show.id} >
                    <GalleryImage show={show} />
                </Link>
            )}
        </div>
    )
}