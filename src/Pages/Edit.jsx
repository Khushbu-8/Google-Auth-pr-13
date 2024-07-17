import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Add_Record, Update_Record } from '../Redux/UserAction/UserAction'

const Edit = () => {
  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
const dispatch = useDispatch();
const naviget = useNavigate();
const location = useLocation();
useEffect(()=>{
    setName(location?.state?.name);
    setPhone(location?.state?.phone)
},[location.state])
const hendelSubmit =(e) =>{
  e.preventDefault();

  let obj = {
    id:location.state.id,
    name:name,
    phone:phone
  }
  dispatch(Update_Record(obj))
  naviget("/View")
  alert("Edit...")
  setName("");
  setPhone("");
 
}
  return (
    <div >
      <div align='center'>
      <h1>Edit User Details</h1>
        <Link to={"/View"}>
          <button  className='btn bg-primary text-white'>View</button>
        </Link>
        </div>
        <div className='w-50 border p-3 mx-auto mt-3 rounded'>
        <form onSubmit={hendelSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name : </label>
                <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} value={name} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                <input type="number" className="form-control" onChange={(e) => setPhone(e.target.value)}  value={phone}/>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
     
    </div>
  )
}

export default Edit
