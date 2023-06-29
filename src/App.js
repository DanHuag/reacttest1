import './App.css';
import { BrowserRouter as Routes, Route} from 'react-router-dom';
import Details from './Details';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  return (
    <html>
    <Routes>
    <div class="header">   
        <div class="container">  
            <Navbar/>     
                <div class="navbar">  
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route path="/comics/:id">
                            <Details/>
                        </Route>
                </div>           
        </div>   
    </div>
    
        {/* <div class="truyen">
            <div class="row">
                <div class="small-container">
                    <div class="col-10">
                        <a href="/dai-quan-gia-la-ma-hoang-904">
                            <img src="images/dai-quan-gia-la-ma-hoang-904.jpg" alt="Đại quản gia là ma hoàng"/>
                        </a>
                        <h3>Đại quản gia là ma hoàng</h3>
                    </div>
                    <div class="col-10">
                        <img src="images/huyet-thanh-cuu-the-chu-ta-chi-can-00000-7066.jpg" alt="Huyết thánh cứu thế chủ: Ta chỉ cần 0.00001%"/>
                        <h3>Huyết thánh cứu thế chủ: Ta<br />chỉ cần 0.00001%</h3>
                    </div>
                    <div class="col-10">
                        <img src="images/lan-kha-ky-duyen.jpg" alt="Lạn kha kỳ duyên"/>
                        <h3>Lạn kha kỳ duyên</h3>
                    </div>
                    <div class="col-10">
                        <img src="images/lao-to-luyen-the-manh-nhat-lich-su.jpg" alt="Lão tổ luyện thể mạnh nhất"/>
                        <h3>Lão tổ luyện thể mạnh nhất</h3>
                    </div>
                    <div class="col-10">
                        <img src="images/nguoi-choi-moi-cap-toi-da-4739.jpg" alt="Người chơi mới cấp tối đa"/>
                        <h3>Người chơi mới cấp tối đa</h3>
                    </div>
                    <div class="col-10">
                        <img src="images/nhat-kiem-doc-ton.jpg" alt="Nhất kiếm độc tôn"/>
                        <h3>Nhất kiếm độc tôn</h3>
                    </div>
                    <div class="col-10">
                        <img src="images/quoc-thuat-ban-dao-khong-bietban-dao-chi-4569.jpg" alt="Quốc thuật bần đạo không biết! Bần đạo chỉ biết lôi pháp"/>
                        <h3>Quốc thuật bần đạo không <br />biết! Bần đạo chỉ biết lôi<br />pháp</h3>
                    </div>
                    <div class="col-10">
                        <img src="images/ta-o-nha-100-nam-khi-ra-ngoai-da-vo-dich-2579.jpg" alt="Ta ở nhà 100 năm khi ra ngoài đã vô địch"/>
                        <h3>Ta ở nhà 100 năm khi ra <br />ngoài đã vô địch</h3>
                    </div>
                    <div class="col-10">
                        <img src="images/ta-u-thien-su.jpg" alt="Tạ u thiên sư"/>
                        <h3>Tạ u thiên sư</h3>
                    </div>
                    <div class="col-10">
                        <img src="images/thien-dao-do-thu-quan.jpg" alt="Thiên đạo đồ thư quán"/>
                        <h3>Thiên đạo đồ thư quán</h3>
                    </div>
                </div>
            </div>
        </div> */}
        </Routes>
    </html>
  );
}

export default App;
