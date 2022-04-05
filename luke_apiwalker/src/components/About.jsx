import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Form from './Form'; 
import img from './public/ef1.jpeg';

const About = () => {
    const {name}= useParams();
    const {number}= useParams();
    const [item, setItem]= useState([])
    const [badreq, setBadreq] = useState(false)
    const planet
        useEffect(()=>{
      axios.get(`https://swapi.dev/api/${name}/${number}`) 
            .then(response => {
              setItem(response.data)
              setBadreq(false)
              console.log(response.data)
            })
            .catch(err => {
                console.log(err)
                setBadreq(true)
            })
  }, [name, number]); 

  
  return (
      <>
    <div>About</div>
    <Form/>
    
   {
       
        badreq?
        <div>
        <img src={'https://i.kym-cdn.com/photos/images/facebook/001/005/935/ef1.jpg'}/>
        <h1>These are not the droids you are looking for!</h1>
        </div>:

       name=='people'?

     
       <table>
           
           
        <thead>
            <tr>
                <th>Name: </th>
                <th> Height </th>
                <th> Mass </th>
                <th> Hair Color </th>
                <th> Skin Color </th>
            </tr>
        </thead>
        <tbody>
        {
             
                    <tr>
                         <td>{item.name}</td>
                        <td>{item.height}</td>
                        <td>{item.mass}</td>
                        <td>{item.hair_color}</td>
                        <td>{item.skin_color}</td>
                    </tr>
            
            
        }    
        </tbody>
       </table> :
       name=='planets'?

       <table>
           
           
        <thead>
            <tr>
            <th>Name: </th>
                <th> Climate </th>
                <th> Terraine </th>
                <th> Surface Water </th>
                <th> Population </th>
            </tr>
        </thead>
        <tbody>
        {
            
                    <tr >
                         <td>{item.name}</td>
                        <td>{item.climate}</td>
                        <td>{item.terrain}</td>
                        <td>{item.surface_water}</td>
                        <td>{item.population}</td>
                    </tr>
                
            
        }    
        </tbody>
       </table> :
       name=='films'?

       <table>
           
           
        <thead>
            <tr>
            <th>Name: </th>
                <th> Episode: </th>
                <th> Opening Crawl: </th>
                
            </tr>
        </thead>
        <tbody>
        {
            
                    <tr >
                         <td>{item.title}</td>
                        <td>{item.episode_id}</td>
                        <td>{item.opening_crawl}</td>
                      
                    </tr>
           
        }    
        </tbody>
       </table> :
       name=='species'?

       <table>
           
           
        <thead>
            <tr>
            <th>Name: </th>
                <th> Class: </th>
                <th> Designation: </th>
                <th> Language</th>
            </tr>
        </thead>
        <tbody>
        {
            
                    <tr>
                         <td>{item.name}</td>
                        <td>{item.classification}</td>
                        <td>{item.designation}</td>
                        <td>{item.language}</td>
                        
                    </tr>
          
        }    
        </tbody>
       </table> :
        name=='vehicles'?

        <table>
            
            
         <thead>
             <tr>
             <th>Name: </th>
                 <th> Model: </th>
                 <th> Crew: </th>
                 <th> Cost in credits:</th>
             </tr>
         </thead>
         <tbody>
         {
            
                     <tr>
                          <td>{item.name}</td>
                         <td>{item.model}</td>
                         <td>{item.crew}</td>
                         <td>{item.cost_in_credits}</td>
                         
                     </tr>

         }    
         </tbody>
        </table> :
         name=='starships'?

         <table>
             
             
          <thead>
              <tr>
              <th>Name: </th>
                  <th> Model: </th>
                  <th> Hyperdrive Rating: </th>
                  <th> Cost in credits:</th>
              </tr>
          </thead>
          <tbody>
          {
             
                      <tr >
                           <td>{item.name}</td>
                          <td>{item.model}</td>
                          <td>{item.hyperdrive_rating}</td>
                          <td>{item.cost_in_credits}</td>
                          
                      </tr>

          }    
          </tbody>
         </table> :
       <h1> Not Available!</h1>
    }
    
    
    </>
  )
}

export default About