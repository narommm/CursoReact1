import React from 'react';
import './App.css';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
     <Register/>
    </div>
  );
}

export default App;

/* 
El primer rest es la respuesta cruda, al res.json se transforma en json
Pero no toda la data se puede tranformar a json
const fetchData = () =>{
  fetch("https://reqres.in/api/users?page=2")
  .then(res => res.json())
  .then()data => {
    console.log(data);
  }


const registerUser = () => {
   const username= {
     username: "petrl14"
     email: "000577616"
     password: "Prritos"
   }
   const config ={
     method: "POST",
     body: JSON.stringify(),
     header:{
        "Content-type": "Application/json"
     }
   }
   url donde va a hacer la peticion
   fetch("https://reactcourseapi.herokuapp.com/user/register")
} 
}

compDidmount: se pueden hacer llamadas asyncronas, 
    setState

render


*/