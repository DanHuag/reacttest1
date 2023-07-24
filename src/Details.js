import './App.css';
import { Link, Routes, Route, useParams } from 'react-router-dom';
import Comic from './Comic';
const ComicDetails = () => {
    const chapters = [
        {
            id: "01",
            title: "don't know"
        },
        {
            id: "02",
            title: "don't know"
        },
        {
            id: "03",
            title: "don't know"
        },
        {
            id: "04",
            title: "don't know"
        },
        {
            id: "05",
            title: "don't know"
        }
    ]

    const { id } = useParams();
    return (
        <div class="content">
            <div class="small-container">
                {chapters.map((chap) =>{
                    return (
                        <article key = {chap.id}>
                            <ul>
                                <li>
                                    <Link to={`/:comicId/${chap.id}`}>Chapter {chap.id}</Link>
                                </li>
                            </ul>
                        </article>  
                    );
                })} 
            </div>

            <div class="content-page">
                <Routes>
                    <Route path='/:comicId/' element={<Comic data={id}/>}/>
                </Routes>
            </div>
        </div>

        
    );
}

export default ComicDetails;