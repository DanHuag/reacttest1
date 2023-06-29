import { BrowserRouter as Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
    return (
        <nav class="navbar">
            <div class="logo">
                <img src="images/ava.png" alt="logo" width="80px"/>
                <h1>Leak Truyen</h1>
                <div class="links">
                    <Link to="/">Home</Link>
                    <Link to="/detail">Detail</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;