import './App.css';
import { useState } from "react";

function Product(props) {
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <li onClick={handleClick}>
      {props.name}
      {showText && <span> : {props.price}</span>}
    </li>
  );
}

function App(){
  const prod = [
    {id: 1, name: 'package 1', price: '4000'},
    {id: 2, name: 'package 2', price: '8000'},
    {id: 3, name: 'package 3', price: '10000'},
    {id: 4, name: 'package 4', price: '15000'}
  ];

  return (
    <div className="App">
      <header className="App-header">               
        <ul>
            
            {prod.map((product) => <Product key={product.id} name={product.name} price={product.price}/>)}

        </ul>
      </header>
    </div>
  );
}

export default App;




// function App() {
//   const [price1, setPrice1] = useState("");
//   const [price2, setPrice2] = useState("");
//   const [price3, setPrice3] = useState("");
//   const [price4, setPrice4] = useState("");

//   return (
//     <div className="App">
//       <header className="App-header">

//         <h3>The price of package 1: {price1}</h3>
//         <p>
//           <button type="button" onClick={() => setPrice1("4000")}>
//           Show</button> 
//         </p>    

//         <h3>The price of package 2: {price2}</h3>
//         <p>
//           <button type="button" onClick={() => setPrice2("8000")}>
//           Show</button> 
//         </p>   

//         <h3>The price of package 3: {price3}</h3>
//         <p>
//           <button type="button" onClick={() => setPrice3("10000")}>
//           Show</button> 
//         </p>  

//         <h3>The price of package 4: {price4}</h3>
//         <p>
//           <button type="button" onClick={() => setPrice4("15000")}>
//           Show</button> 
//         </p>  
        
//       </header>
//     </div>
//   );
// }



