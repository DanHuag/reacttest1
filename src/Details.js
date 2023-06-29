import { BrowserRouter as useParams } from "react-router-dom";
import useFetch from "./useFetch";

const Details = () => {
    const { id } = useParams() 
    const { data: comic, error, isPending } = useFetch('http://localhost:3000/blogs/' + id);

    return (
        <div class="comic-details">
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { comic && (
                <article>
                    <h2>{ comic.title }</h2>
                </article>
            )}
        </div>
    );
}

export default Details;