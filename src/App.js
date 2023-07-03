import './App.css';
import ComicDetails from './Details';
import Home from './Home';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <html>

    <div class="header">   
        <div class="container">  
                <div class="navbar">   
                    <img src="images/ava.png" alt="logo" width="80px"/>
                    <h1>Leak Truyen</h1>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                            </ul>
                        </nav>

                        
                </div>    
                <div class="row"> 
                    <div class="col-2">
                        <img src="images/isaac.gif" alt="isaac" width="80px"/>
                    </div>
                    <div class="col-2">
                        <h1>Truyện Mới Cập Nhật!</h1>
                    </div>   
                </div>    
        </div>   
    </div>
    
    <div class="page-name">
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/:comicId" element={<ComicDetails />}/>
    </Routes>
    </div>
    </html>
  );
}

export default App;
