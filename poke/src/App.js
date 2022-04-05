
import './App.css';
import React, {useState,useEffect} from 'react';

function App() {
  const [poke, setPoki]= useState([]);
    useEffect(() => {
        fetch(' https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response => response.json())
            .then(response => setPoki(response.results))
    }, []);
  
  
  return (
    <div className="App">
      <button onClick={useEffect}> Fetch Pokimon </button> 

      <table>
        <thead>
          <tr>
            <th>Pokimon Name </th>
          </tr>
        </thead>
        <tbody>
        {
         poke.map((pokemon )=>{
           return (
             <tr >
               <td key={pokemon}> Name: {pokemon.name} </td>
             </tr>
           )
         }) 
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
