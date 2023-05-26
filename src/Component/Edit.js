import React,{useState,useEffect} from 'react'

import axios from 'axios';

const Edit = ({data}) => {
    console.log("edit "+JSON.stringify(data))
    const [id, setId] = useState(data?.id);

    const [name, setName] = useState(data?.name);
const [phone, setPhone] = useState(data?.email);
const [email, setEmail] = useState(data?.phone);
const [address, setAddress] = useState(data?.Address);
const onSubmit =() => {
    let formdata={
        id:id,
        name:name,
        email:email,
        phone:phone,
        Address:address
    }
    const res =axios.put(`http://localhost:8000/users/${id}`,formdata)
      console.log(res)
    alert(JSON.stringify(formdata))
}
  return (
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
      <button className="btn btn-danger" style={{backgroundColor:"#007FFF" ,height:"25px", borderRadius:"5px"}} onClick={onSubmit} type="submit"> Update</button> &nbsp;&nbsp;
      <button className="btn btn-danger"  style={{backgroundColor:"black" ,color:"white" ,height:"25px", borderRadius:"5px"}} type="submit"> Reset</button>

      </div>
    </form>
  )
}

export default Edit