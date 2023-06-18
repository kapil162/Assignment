import React, { useState } from 'react';
import axios from "axios"
import { useNavigate,Link } from 'react-router-dom';

const AddEmployee = () => {

  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({});


  const handleChange =(event)=>{
    console.log(event.target.value);
    setFormValue({
      ...formValue,
      [event.target.name]:event.target.value,
    });
  }

  // const handleAddress =(event)=>{
  //   console.log(event.target.value);
  //   setAddress({
  //     ...address,
  //     [event.target.name]:event.target.value,
  //   })
  // }

  // console.log("address", address);
  const handleSubmit = async() =>{
    if(formValue.Name){
      try {
        const response = await axios.post(process.env.REACT_APP_API_PATH+'createEmployee',
        {
          Name:formValue.Name,
          Phone_number:formValue.Phone_number,
          Home_address:{
            Address_line_1:formValue.Address_line_1,
            ZIP_Code:formValue.ZIP_Code,
            City:formValue.City
          },
          Date_of_employmente:formValue.Date_of_employmente,
          Date_of_birth:formValue.Date_of_birth
        });
        console.log(response);
        if(response.status === 200){
          navigate("/")
        }
      
      } catch (error) {
        console.log(error)
      }
    }
  else{
    alert("please fill the field")
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
          <h3>Add Employee</h3>
        </div>
        <div className='container_body'>
          <table>
            <tbody style={{marginTop:"20px"}}>
              <tr>
                <td>Name</td>
                <td><input type='text' name='Name' value={formValue.Name} onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td>Phone Number</td>
                <td><input type='Number' name='Phone_number' value={formValue.Phone_number}onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td>Address Line 1</td>
                <td><input type='text' name='Address_line_1' value={formValue.Address_line_1} onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td>Zip Code</td>
                <td><input type='Number' name="ZIP_Code" value={formValue.ZIP_Code} onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td>City</td>
                <td><input type='text' name='City' value={formValue.City} onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td>Date Of Employment</td>
                <td><input type='date' name='Date_of_employmente' value={formValue.Date_of_employmente} onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td>Date Of Birth</td>
                <td><input type='date' name='Date_of_birth' value={formValue.Date_of_birth}onChange={handleChange}></input></td>
              </tr>
              <tr>
                <td><button onClick={handleSubmit}>Save</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee