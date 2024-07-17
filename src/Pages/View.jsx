import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { Delete_Record, View_Record } from '../Redux/UserAction/UserAction';

const View = () => {

  const dispatch = useDispatch();
  const naviget = useNavigate();

  useEffect(()=>{
    dispatch(View_Record())
  },[])
  
  let  record = useSelector(state => state.user.UserList)


  // delete
  const hendleDelete =(id) =>{
      dispatch(Delete_Record(id))
    alert("delete...")
  }
    return (
    <div align='center'>
      <h1>View Detaile</h1>
      <div>
        <Link to={'/'}>
        <button  className='btn bg-primary text-white'>Add</button>
        </Link>
       
      </div>

      <div className='p-5'>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
 <tbody>
  {
   record && record.map((item) => {
      return (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.name}</td>
          <td>{item.phone}</td>
          <td>
            <button className='btn btn-danger text-white' onClick={() => hendleDelete(item.id)}>Delete</button> 
            <button className='btn btn-info ms-2 text-white' onClick={ () => naviget(`/edit`,{state:item})}>Edit</button>
          </td>
        </tr>
      )
    })
  }
 </tbody>
</table>
      </div>
    </div>
  )
}

export default View
