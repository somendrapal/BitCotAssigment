import React, { useEffect } from 'react'
import { useState, UseEffect } from "react";
import {BiUserCircle} from 'react-icons/bi'
import {MdOutlineEdit} from 'react-icons/md'
import {AiFillDelete} from 'react-icons/ai'
import {BsEyeFill} from 'react-icons/bs'
import Modal from 'react-modal';
import axios from 'axios';
import Edit from './Edit';
import ViewData from './ViewData';
var editData;
var editData1;
var size;

const customStyles = {
    content: {
        width: "30%",
        height: "50%",
        top: "10%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        transform: "translate(-50%)",
      
    },
  };

const Contact = ({data}) => {
    const [open, SetOpen] = useState(false);
    const [openModal1, setIsOpen1] = useState(false);
    const [dataSize, setDataSize] = useState(true);


    const [data1, setData1] = useState([]);
    const openModal =(id) => {
     
        SetOpen(true);
        let newEditItem= data1.find((ele) =>{
            return ele.id==id
        });

      editData1=newEditItem
      }
    useEffect(()=>{
        apiFetch()
    },[])
  const apiFetch= async() =>{       
    
       await fetch('http://localhost:8000/users').then(function(response){
        response.json().then(function(data) {
            console.log(data);
            setData1([...data])
            size=data1.length;
            if(size<0){
                setDataSize(false)
            }
            else{
                setDataSize(true)

            }
        });
    })
    .catch(error => {
        if (error.response) {
          console.log('Error response:', error.response);
        } else if (error.request) {
          console.log('Error request:', error.request);
        } else {
          console.log('Error message:', error.message);
        }
      });
    }
    console.log("size "+size)
    function closeModal() {
        setIsOpen1(false);
      }
    
      function closeModal1() {
        SetOpen(false);
      }
      const onEdit=(id) =>{
        setIsOpen1(true)
        let newEditItem= data1.find((ele) =>{
            return ele.id==id
        });

      editData=newEditItem
      }
      const deleteTask = async (id) => {
        console.log("id ")

        console.log("id "+id)
        const res = axios.delete(`http://localhost:8000/users/${id}`, {
        })
        console.log(res)
        window.location.reload(false);

    }
    console.log("data "+ JSON.stringify(data1))
    // console.log("data1 "+ JSON.stringify(data1[1].name))

  return (
    < div style={{paddingLeft:"20px"}}>
      {data1.length > 0 ? (
    data1.map(data1=>(
    <div className='contact-list'>
   <h4 style={{paddingTop:"5%",paddingLeft:"2%"}} > {data1.id} </h4>
   <div className='icon'><BiUserCircle size='32'/></div>
   <h4 style={{marginTop:"-5.5%",paddingLeft:"11%",color:"black"}} >{data1.name}</h4>
   <h4 style={{marginTop:"-3%",paddingLeft:"11%"}} >{data1.phone}</h4>
   <div className='icon1'><BsEyeFill onClick={() => openModal(data1.id)} size='32'/></div>
   <div className='icon2'><AiFillDelete size='32' onClick={() => deleteTask(data1.id)}/></div>
   <div className='icon3'><MdOutlineEdit size='32' onClick={() =>onEdit(data1.id)}/></div>


    </div>
    ))):(
        <p>Contact List is empty</p>
      )}
    <Modal
        isOpen={openModal1}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
         <div style={{backgroundColor:"white", height:"20%", width:"100%", borderBottom:"2px solid" }}>
        <h4 className="addcontact"> Contact Detail</h4>        <h3 className="close" onClick={closeModal} >X</h3>
        </div> 
       <Edit data={editData}/>
      </Modal>
      <Modal
        isOpen={open}
        onRequestClose={closeModal1}
        style={customStyles}
      >
        <ViewData data={editData1}/>
         </Modal>
    </div>
  )
}

export default Contact