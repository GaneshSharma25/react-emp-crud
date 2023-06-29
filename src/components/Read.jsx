import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Read() {
  const [apiData, setApiData] = useState([]);

  function getData() {
    axios
      .get("http://localhost:3004/emp")
      .then((response) => {
        setApiData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDelete(id){
    axios.delete(`http://localhost:3004/emp/${id}`)
    .then(() => {
      getData();
    })
    .catch((err) => {
      console.log(err)
    })
  }

  function setDataToStorage(empno, ename, sal){
    localStorage.setItem('empno',empno);
    localStorage.setItem('ename',ename);
    localStorage.setItem('sal',sal)
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
   
      <h1>Read Data</h1>
      <Link to='/create'>
        <button>Add Employee</button>
      </Link>
      <table>
        <thead>
          <tr>
            <th>EMP NO</th>
            <th>ENAME</th>
            <th>SALARY</th>
            <th>EDIT</th>
            <th>DELETE</th>
          </tr>
        </thead>
        <tbody>
          {apiData.map((emp) => {
            return (
              <>
                <tr>
                  <td>{emp.empno}</td>
                  <td>{emp.ename}</td>
                  <td>{emp.sal}</td>
                  <td>
                    <Link to='/edit'> 
                    <button type="button" id="edit" name="edit" onClick={() => setDataToStorage(emp.empno,emp.ename,emp.sal)}>Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button type="button" id="del" name="del" onClick={() => {if(window.confirm("Do you want to delete the employee ?")){
                      handleDelete(emp.empno)
                    }}}>Delete</button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Read;
