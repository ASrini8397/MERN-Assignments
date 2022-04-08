import React, { useState, useEffect } from 'react';
import axios from "axios";
import {Link, Switch, Route, Redirect} from 'react-router-dom';

const Display = () => {
    const [petData, setPetData] = useState([]);
    const [errors, setErrors] = useState([]);
    useEffect(() => {
      axios
        .get("http://localhost:8000/api/pet")
        .then((res) => {
          console.log("its working")
          setPetData(res.data.Pets);
          
          
        })
        .catch(err => {
          console.error(err)
          const errorResponse = err.response.data.errors; // Get the errors from err.response.data
          const errorArr = []; // Define a temp error array to push the messages in
          for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
              errorArr.push(errorResponse[key].message)
          }
          // Set Errors
          setErrors(errorArr);
        
        });
    }, []);
    
    
  
    return (
      <>
        <h3>These pets are looking for a good home!</h3>
        <Link to={"/pet/new"}>Add a pet to the list</Link>

        <table style={{
          border: "2px solid black",
          width: "70%",
          height: "400px",
          margin: "auto",
          padding: "auto"
        }}>
          <thead style={{
          border: "2px solid black"
        }}>
            <tr style={{
          border: "2px solid black"
        }}>
              <th style={{
          border: "2px solid black"
        }}>Name</th>
              <th style={{
          border: "2px solid black"
        }}>Type</th>
              <th style={{
          border: "2px solid black"
        }}>Actions</th>
            </tr>
          </thead>
          <tbody style={{
          border: "2px solid black"
        }}>
          { petData?
        <>
        {petData.map((p, i) => {
          return (
            <tr key={p._id} style={{
              border: "2px solid black"
            }}>
               <td style={{
          border: "2px solid black"
        }}>{p.name} </td>
               <td style={{
          border: "2px solid black"
        }}>{p.type} </td>
              <td style={{
          border: "2px solid black"
        }}> 
                {/* <button onClick={ () => deletePet(p._id)}> Delete </button> */}
              <Link to= {`pet/show/${p._id}`}> Details </Link> |
               <Link to= {`pet/update/${p._id}`}> Edit </Link> </td>
            </tr>
          );
        })}
        </>:
        <tr style={{
          border: "2px solid black"
        }}>
          <td>Empty for now! </td>
          <td>Empty for now! </td>
          <td>Empty for now! </td>
          </tr>
        }
          </tbody>
        </table>
        
        
      </>
    );
}

export default Display