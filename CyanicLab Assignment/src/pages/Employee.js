import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,Link } from 'react-router-dom';

const Employee = () => {

    const navigate = useNavigate();
    const [data,setData] = useState();
    const [totalUser, setTotalUser] = useState()
    const [activePage, setActivePage] = useState(1);

    const limit = 2;


    useEffect(()=>{
        const fetchData =async()=>{
            const response = await axios.get(process.env.REACT_APP_API_PATH+`findEmployee?limit=${limit}&page=${activePage}&Deleted=false`);
            setData(response.data.data);
            setTotalUser(response.data.countData);
        }
        fetchData();
    },[activePage])

    const calculateTotalPage =(total,limit)=>{
      const page = [];
      for(let x=1; x<=Math.ceil(parseInt(total)/limit); x++){
        page.push(x);
      }
      return page;
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
          <h3>Employee</h3>
          <span style={{margin:"10px"}}><button>
          <Link to="/addEmployee">Add</Link>
          </button> 
            
          </span>
        </div>
        <div className='container_body'>
        <table className='table'>
            <thead>
                <th className='th'>Name</th>
                <th className='th'>Phone No.</th>
                <th className='th'>Address</th>
                <th className='th'>Zip Code</th>
                <th className='th'>City</th>
                <th className='th'>Date Of Employmente</th>
                <th className='th'>Date Of Birth</th>
                <th className='th'>Action</th>
            </thead>
            <tbody>
                {data && data.map((list)=>(
                    <tr key={list._id}>
                        <td className='td'>{list.Name}</td>
                        <td className='td'>{list.Phone_number}</td>
                        <td className='td'>{list.Home_address.Address_line_1}</td>
                        <td className='td'>{list.Home_address.ZIP_Code}</td>
                        <td className='td'>{list.Home_address.City}</td>
                        <td className='td'>{list.Date_of_employmente}</td>
                        <td className='td'>{list.Date_of_birth}</td>
                        <td className='td'>
                            <button>
                            <Link to={`/edit/${list._id}`}>Edit</Link>
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            {activePage !==1 && <li class="page-item disabled" onClick={()=>setActivePage(activePage-1)}>
              <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
            </li>}
            {calculateTotalPage(totalUser,limit).map((pageNo) =>
            (<li class="page-item" key={pageNo} onClick={()=>setActivePage(pageNo)}><a class="page-link" href="#">{pageNo}</a></li>))}
            {activePage !== Math.ceil(parseInt(totalUser/limit)) && <li class="page-item" onClick={()=>setActivePage(activePage+1)}>
              <a class="page-link" href="#">Next</a>
            </li>}
          </ul>
        </nav>
        </div>
      </div>
    </div>
  )
}

export default Employee