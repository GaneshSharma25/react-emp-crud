import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Edit() {
  
    const [empId, setEmpId] = useState('');
    const [name, setName] = useState('');
    const [sal, setSal] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
    setEmpId(localStorage.getItem('empno'));
    setName(localStorage.getItem('ename'));
    setSal(localStorage.getItem('sal'));
    }, [])
    

    const handleUpdate = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3004/emp/${empId}`,
        {
            empno :  empId,
            ename :  name,
            sal : sal
        }
        )
        .then((response) => {
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
        })
    }

  return (
   <>
   <h1>Update Employee Details</h1>
   <form onSubmit={handleUpdate} action="">

    <table>
        <tr>
            <td>Enter EmployeeID : </td>
            <td><input type="number" value={empId} id='id' name='id' readOnly/></td>
        </tr>
        <tr>
            <td>Enter Employee Name : </td>
            <td><input type="text" value={name} id='name' name='name' onChange={(e) => setName(e.target.value)} /></td>
        </tr>
        <tr>
            <td>Enter Salary : </td>
            <td><input type="number" value={sal} id='sal' name='sal' onChange={(e) => setSal(e.target.value)}/></td>
        </tr>
        <tr>
            <td>
                <button type='submit' value='Submit'>Update</button>
            </td>
        </tr>
    </table>
   </form>
   </>
  )
}

export default Edit
