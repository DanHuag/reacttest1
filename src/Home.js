import ComicList from "./ComicList";
import useFetch from "./useFetch";
import './App.css';

const Home = () => {
    const { error, isPending, data: comics } = useFetch('http://localhost:3000/')

  return (
    <div className="home">
        <div class="row"> 
                    <div class="col-2">
                        <img src="src/images/isaac.gif" alt="isaac" width="80px"/>
                    </div>
                    <div class="col-2">
                        <h1>Truyện Mới Cập Nhật!</h1>
                    </div>
        </div>
        
        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { comics && <ComicList comics={comics} /> }
        
    </div>
  );
}
 
export default Home;