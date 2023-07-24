import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import comics from './data';
import ComicDetails from './Details';

function Home(){
    return(
        <div class="comic-details">
            <div class="truyen">
            <div class="row">
                <div class="small-container">
                    <div class="col-10">
                        {comics.map((comic)=>{
                            return (
                                <article key={comic.id}>
                                    <Link to={`/${comic.id}`}> <img class="img-responsive" src={comics} alt={comic.title}/> </Link>
                                    <Link to={`/${comic.id}`}> <h3>{comic.title}</h3> </Link>
                                </article>
                            );
                        })}   
                    </div>

                    <div class="content-page">
                        <Routes>
                            <Route path='/:comicId' element={<ComicDetails />}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;