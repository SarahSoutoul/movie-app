export default function ShowCard({show}) {
    return (
        <div className="show-card">
            <div>
                <img src={show.image.medium} />
            </div>
            <div>
                <span>{show.rating.average}</span>
                <h2>{show.name}</h2>
                <em>{show.language}, {show.premiered}</em>
                <div dangerouslySetInnerHTML={{__html: show.summary}}></div>
            </div>
        </div>
    )
}