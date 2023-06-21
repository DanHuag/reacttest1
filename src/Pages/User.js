import { useState } from "react";

function UserClick(usr) {
    const [showText, setShowText] = useState(false);
  
    const handleClick = () => {
      setShowText(!showText);
    };
  
    return (
      <li onClick={handleClick}> 
        {usr.name}
        {showText && <span> : {usr.email} - {usr.phone} - {usr.address}</span>}
      </li>
    );
  }
function User() {

    const usr = [
        {id: 5, name: 'Nguyen A', email: 'nguyena@gmail.com', phone: '1234567890', address: 'HCM city'},
        {id: 6, name: 'Le B', email: 'leb@gmail.com', phone: '1234567899', address: 'Ha Noi'},
        {id: 7, name: 'Nguyen C', email: 'nguyenc@gmail.com', phone: '1234567898', address: 'Da Nang'},
        {id: 8, name: 'tran D', email: 'trand@gmail.com', phone: '1234567897', address: 'Hue'}
      ];

    return (
        <div>
            <h1>User</h1>

             {usr.map((user) => <UserClick key={user.id} name={user.name} email={user.email} phone={user.phone} address={user.address}/>)}
            
        </div>
        
    )
}

export default User