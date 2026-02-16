import { Button, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Formm = () => {
  var Navigate=useNavigate()
  var location=useLocation()
  console.log(location.state)

  var[student,setStudent]=useState({Name:"",Age:"",Department:"",Mark:""})
 const HandleClick=()=>{
  if(location.state !==null){
    //update
    axios.put("http://localhost:3004/update/"+location.state.u._id,student)
    .then((res)=>{
      alert(res.data)
      Navigate("/tab")
    })
  }
  else{
    axios.post("http://localhost:3004/add",student)
    .then((res)=>{
      alert(res.data)
      Navigate("/fr")
    })
  }
 }




  const HandleInput=(e)=>{
    setStudent({...student,[e.target.name]:e.target.value})
    console.log(student)
  }
  
  
  if(location.state !==null){
    useEffect(()=>{
      setStudent({...student,
        Name:location.state.u.Name,
        Age:location.state.u.Age,
        Department:location.state.u.Department,
        Mark:location.state.u.Mark
      })
    },[])
  }
  return (
    <div>
      <br /><br /><br />
        <TextField label="Name" variant='filled' name='Name' value={student.Name} onChange={HandleInput}/><br/><br/>
        <TextField label="Age" variant='filled' name='Age' value={student.Age} onChange={HandleInput}/><br/><br/>
        <TextField label="Department" variant='filled' name='Department' value={student.Department} onChange={HandleInput}/><br/><br/>
        <TextField label="Mark" variant='filled' name='Mark' value={student.Mark} onChange={HandleInput}/><br/><br/>
        <Button variant='contained'onClick={HandleClick}>Submitt</Button>
        
    </div>
  )
}

export default Formm