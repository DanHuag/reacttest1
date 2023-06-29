import { BrowserRouter as Link } from 'react-router-dom';

const ComicList = ({ comics }) => {
    return (
        <div class="comic-list">
            {comics.map(comic => (
                <div class="comic-preview" key={comic.id}>
                    <Link to={`/comics/${comic.id}`}>
                        <h2>{ comic.title }</h2>   
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default ComicList;