import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams,Link } from 'react-router-dom';

const EditEmplayee = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const[data, setData] = useState({
    Name:"",
    Phone_number:"",
    Home_address:{
      Address_line_1:"",
      ZIP_Code:"",
      City:""
    },
    Date_of_employmente:"",
    Date_of_birth:""
  });

  useState(()=>{
    const fetchData = async()=>{
      const response = await axios.get(`http://localhost:7000/findEmployeeById/${id}`);
      // console.log(response.data.data)
      setData(response.data.data);
    }
    fetchData();
  },[])


  const handleChange =(event)=>{
    if (event.target.name.includes('Home_address')) {
      const homeAddressField = event.target.name.split('.')[1];
      setData((prevData) => ({
        ...prevData,
        Home_address: {
          ...prevData.Home_address,
          [homeAddressField]: event.target.value
        }
      }));
    } else {
      setData((prevData) => ({
        ...prevData,
        [event.target.name]: event.target.value
      }));
    }
  }
  const handleSubmit = async(id)=>{
    const updateData = await axios.patch(process.env.REACT_APP_API_PATH+`updateEmployee/${id}`,data);
    console.log(updateData);
    if(updateData.status ===200){
      navigate("/");
    }
  }
  // console.log(data,"HGYYGY")

  const handleDelete = async(id)=>{
    // const deleteData = await axios.delete(`http://localhost:7000/deleteemployee/${id}`);
    const deleteData = await axios.patch(process.env.REACT_APP_API_PATH+`updateEmployee/${id}`,{Deleted:true});
    console.log(deleteData);
    if(deleteData.status ===200){
      navigate("/");
    }
  }

  return (
    <div>
      <div className='container'>
        <nav>
          <li style={{margin: "25px"}}>
          <Link to="/">Employee</Link>
          </li>
          <li style={{margin: "25px"}}>
          <Link to="/deletedEmployee"> Deleted Employee</Link>
          </li>
        </nav>
        <div className='conatiner_header'>
          <h3>Edit Employee</h3>
          <span></span>
        </div>
        <div className='container_body'>
          <table>
            <tbody style={{marginTop:"20px"}}>
              <tr>
                <td>Name</td>
                <td><input type='text' name='Name' value={data.Name} onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td><input type='Number' name='Phone_number' value={data.Phone_number} onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td>Address Line 1</td>
                <td><input type='text' name='Home_address.Address_line_1' value={data.Home_address.Address_line_1}  onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td>Zip Code</td>
                <td><input type='Number' name="Home_address.ZIP_Code" value={data.Home_address.ZIP_Code}  onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td>City</td>
                <td><input type='text' name='Home_address.City' value={data.Home_address.City} onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td>Date Of Employment</td>
                <td><input type='date' name='Date_of_employmente' value={data.Date_of_employmente} onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td>Date Of Birth</td>
                <td><input type='date' name='Date_of_birth' value={data.Date_of_birth} onChange={handleChange}></input></td>
              </tr>
              <tr>
                <button onClick={()=>handleSubmit(data._id)}>Update</button>
                <button onClick={()=>handleDelete(data._id)}>Delete</button>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default EditEmplayee