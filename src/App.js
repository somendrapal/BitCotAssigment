import logo from './logo.svg';
import './App.css';
import { useState, UseEffect } from "react";
import Modal from 'react-modal';
import Data from './Component/Data.json'
import Header from './Component/Header';
import Contact from './Component/Contact';

function App() {
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(Data.users);

// console.log("data "+ JSON.stringify(data))
  const openModal =() => {
    setIsOpen(true);
  }

 

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="App">
      <Header/>
      <input className="search" placeholder="Search Contact" name="gsearch"/>
      <Contact data={data}/>

      
    </div>
  );
}

export default App;
