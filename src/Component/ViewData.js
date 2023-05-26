import React,{useState,useEffect} from 'react'
const ViewData = ({data}) => {
    const [modalOpen,setModalOpen]=useState(false)
    console.log(JSON.stringify(data.name))
  return (
    <div>
 <div className="view">
      
    
 <div style={{backgroundColor:"white", height:"20%", width:"100%", borderBottom:"2px solid" }}>
        <h4 className="addcontact"> Contact Detail</h4>        <h3 className="close" >X</h3>
        </div> 
        <br/>
        <div className='container' style={{backgroundColor:"white"}}>
            Name:{data?.name}<br/>
            Phone:{data?.phone}<br/>
            Email:{data?.email}<br/>
            Address:{data?.Address}<br/>



        </div>
      </div>
    </div>
  )
}

export default ViewData