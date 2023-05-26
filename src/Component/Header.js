import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState, useEffect } from "react";
import Data from './Data.json'
import axios from 'axios'
import Modal from "react-modal";
const customStyles = {
  content: {
    width: "20%",
    height: "50%",
    top: "10%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%)",
  },
};
const Header = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [data2, setData2] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");


  useEffect(()=>{
    axios.get('http://localhost:8000/users').then((res) => {
        //console.log("axios " +JSON.stringify(res.data));
       setData2(res.data)
        console.log("header axios " +JSON.stringify(data2));


    })
},[])
const onSubmit =() => {
 
    const idx = data2.length;

    let formdata={
        id:idx+1,
        name:name,
        email:email,
        phone:phone,
        address:address
    }
    const res =axios.post('http://localhost:8000/users', formdata)
      console.log(res)
}
console.log("header "+JSON.stringify(data2))

  const openModal = () => {
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="header">
      <h4 className="contact">
        All Contact{" "}
        <span className="add">
          {" "}
          <IoMdAddCircleOutline onClick={openModal} />
        </span>{" "}
      </h4>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h4 className="addcontact">Add Contact</h4>        <h3 className="close" onClick={closeModal}>X</h3>

        <hr/>
        <form>
        <div style={{paddingLeft:"40px"}}>

          <div >
            <label >
              Name
            </label>
            <br />
            <input  type="text" placeholder="name" value={name} onChange={(e)=>setName(e.target.value)} required />
          </div>
          <div style={{marginTop:'-7%'}}>
            <label className="form-label" htmlFor="email">
              {" "}
              <br />
              Email
            </label>{" "}
            <br />
            <input  type="text" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} required />

            <br />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Phone
            </label>{" "}
            <br />
            <input  type="value" maxLength={10} placeholder="Phone Number" value={phone} onChange={(e)=>setPhone(e.target.value)} required />

            <br />
          </div>
          <div className="mb-3">
            <label  htmlFor="message">
              Address
            </label>{" "}
            <br />
            <input  type="text" placeholder="Address" value={address} onChange={(e)=>setAddress(e.target.value)} required />

            <br />
            <br/>
          </div>
          <button className="btn btn-danger" onClick={onSubmit} type="submit"> Submit</button> &nbsp;&nbsp;
          <button className="btn btn-danger" type="submit"> Reset</button>

          </div>
        </form>
      </Modal>
    </div>
  );
};

export default Header;
