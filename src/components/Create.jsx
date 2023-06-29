import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Create() {

    const [empId, setEmpId] = useState('');
    const [name, setName] = useState('');
    const [sal, setSal] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3004/emp/add',
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
   <h1>Add Employee Details</h1>
   <form onSubmit={handleSubmit} action="">

    <table>
        <tr>
            <td>Enter EmployeeID : </td>
            <td><input type="number" id='id' name='id' onChange={(e) => setEmpId(e.target.value)}/></td>
        </tr>
        <tr>
            <td>Enter Employee Name : </td>
            <td><input type="text" id='name' name='name' onChange={(e) => setName(e.target.value)} /></td>
        </tr>
        <tr>
            <td>Enter Salary : </td>
            <td><input type="number" id='sal' name='sal' onChange={(e) => setSal(e.target.value)}/></td>
        </tr>
        <tr>
            <td>
                <button type='submit' value='Submit'>Add</button>
            </td>
        </tr>
    </table>
   </form>
   </>
  )
}

export default Create
