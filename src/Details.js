import './App.css';
import chapters from "./chapter";
import comics from './data';
import { Link, Routes, Route } from 'react-router-dom';
import Comic from './Comic';
const ComicDetails = () => {

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
                    <Route path='/:comicId/:chapterId' element={<Comic />}/>
                </Routes>
            </div>
        </div>

        
    );
}

export default ComicDetails;