
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Form = (props) =>{
      // const {name}= useParams();
      // const {number}= useParams();
      const [item, setItem]= useState([])
      const [name, setName] = useState("");
      const [number, setNumber] = useState("");
      // console.log(name, number)
      const history = useHistory();

  //     useEffect(()=>{
  //     axios.get(`https://swapi.dev/api/${name}/${number}`) 
  //           .then(response => {
  //             setItem(response.data)
  //             console.log(response.data)
  //           })
  //           .catch(err => console.log(err))
  // }, []); 

  const sendSurvey = (e) => {
    e.preventDefault();
    
    // // do something with the data
    history.push(`/find/${name}/${number}`);

    console.log(name);
    console.log(number);
  
  }
      
    return (
      <>
      <div>
      <form onSubmit={ sendSurvey }>
        <label>Pick:</label>
        <select name={name} id={name} onChange={(e) =>  setName(e.target.value)} value={name}> 
        <option value="null"> -- </option>
        <option value="people"> People </option>
        <option value="planets"> Planet </option>
        <option value="films"> Films </option>
        <option value="species"> Species </option>
        <option value="vehicles"> Vehicles </option>
        <option value="starships"> Starships </option>
        </select >

        <label> Pick:</label>
        <input type="number" name={number} onChange={(e) =>  setNumber(e.target.value)} value={number}/>
        <button> Submit </button>
      </form>
      </div>
      </>
    );
  }

export default Form