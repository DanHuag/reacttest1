import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/Home'
import Product from './Pages/Product'
import User from './Pages/User'

function App(){

  return (
    <div className="App">
      <header className="App-header">  
        <nav>                 
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/user">User</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/Product" element={<Product />}/>
          <Route path="/User" element={<User />}/>
        </Routes>
        
      </header>
    </div>
  );
}

export default App;








