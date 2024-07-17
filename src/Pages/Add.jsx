import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Add_Record } from '../Redux/UserAction/UserAction'
import { signOut } from 'firebase/auth'
import { auth } from '../firebaseconfig'

const Add = () => {
  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
const dispatch = useDispatch();
const naviget = useNavigate();

const hendelSubmit =(e) =>{
  e.preventDefault();

  let obj = {
    name:name,
    phone:phone
  }
  dispatch(Add_Record(obj))
  naviget("/View")
  alert("Add...")
  setName("");
  setPhone("");
 
}
const hendleLogout = async() =>{
  try {
      await signOut(auth)
      naviget('/')
  } catch (error) {
    console.log(error);
    return false;
  }
}
  return (
    <div >
      <div align='center'>
      <h1>Add User Details</h1>
        <Link to={"/View"}>
          <button  className='btn bg-primary text-white'>View</button>
        </Link>
        <button onClick={() => hendleLogout()} className='btn bg-success text-white ms-3'>Log Out</button>
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

export default Add
