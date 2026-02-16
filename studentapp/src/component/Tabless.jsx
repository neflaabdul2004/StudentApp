import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Tabless = () => {
  var navigate=useNavigate()
  var[user,setUser]=useState([])
  useEffect(()=>{
    axios.get("http://localhost:3004/view")
    .then((rs)=>{
      setUser(rs.data)
      console.log(user)
    })
  },[])

  const Handldelete=(id)=>{
    console.log(id)
    axios.delete("http://localhost:3004/remove/"+id)
    .then((res)=>{
      alert(res.data)
    })
    
    }
  const Handlupdate=(u)=>{

    console.log("data",u)
    navigate("/fr",{state:{u}})
   }

  

  return (
    <div>
      <br /><br /><br />
     <TableContainer >
        <Table border={1}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell >Age</TableCell>
              <TableCell >Department</TableCell>
              <TableCell >Mark</TableCell>
              
              
            </TableRow>
            </TableHead>
            <TableBody>
              {user.map((u)=>{
                return(
                  <TableRow>
                    <TableCell>{u.Name}</TableCell>
                    <TableCell >{u.Age}</TableCell>
                    <TableCell >{u.Department}</TableCell>
                  <TableCell >{u.Mark}</TableCell>
                  <Button variant="contained" onClick={()=>{Handldelete(u._id)}}>Delete</Button>
                 <Button variant="contained" onClick={()=>{Handlupdate(u)}}>Update</Button>
                  </TableRow>
                )
              })}
            </TableBody>
            </Table>
            </TableContainer>
            
    </div>
  )
}


export default Tabless