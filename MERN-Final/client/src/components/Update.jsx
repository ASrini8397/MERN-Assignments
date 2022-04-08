import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory, Link } from "react-router-dom";
    
const Update = (props) => {
    const { id } = useParams();
    const[name, setName]= useState()
    const[type, setType]= useState()
    const[description, setDescription]= useState()
    const[skills1, setSkills1]= useState()
    const[skills2, setSkills2]= useState()
    const[skills3, setSkills3]= useState()
    const history = useHistory();
    const [errors, setErrors] = useState([]);
    const [val, setVal]= useState(false)
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setName(res.data.Pet.name);
                setType(res.data.Pet.type);
                setDescription(res.data.Pet.description);
                setSkills1(res.data.Pet.skills1);
                setSkills1(res.data.Pet.skills1);
                setSkills2(res.data.Pet.skills2);
                setSkills3(res.data.Pet.skills3);
                
                console.log(res.data)
            })
            .catch((err) => {
                console.error(err);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) {
                  // Loop through all errors and get the messages
                  errorArr.push(errorResponse[key].message);
                }
                // Set Errors
                setErrors(errorArr);
              });
    }, [val]);
    
    const updatePet = e => {
        e.preventDefault();
        setVal(true)
        
        // setName(" ");
        // setType(" ")
        // setDescription(" ");
        // setSkills1(" ");
        // setSkills1(" ");
        // setSkills2(" ");
        // setSkills3(" ");
        
        axios.put('http://localhost:8000/api/pet/' + id, {
            name,
            type,
            description,
            skills1,
            skills2,
            skills3
        })
            .then(res => {
                console.log(res)
                history.push("/")
            })
            .catch((err) => {
                console.error(err);
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) {
                  // Loop through all errors and get the messages
                  errorArr.push(errorResponse[key].message);
                }
                // Set Errors
                setErrors(errorArr);
              });
    }
    
    return (
        <div>
            <h1>Update Pet Info</h1>
            <Link to={"/"}>Home</Link>
            <div style={{
                border: "2px solid black",
                margin: "auto",
                padding: "auto",
                height: "400px",
                width: "70%"
            }}>
            <form onSubmit={updatePet}>
            {errors.map((err, index) => (
            <p key={index} style={{
                color: "red"
            }}>{err}</p>
          ))}
                <p>
                    <label>Name</label><br />
                    <input type="text" 
                    name="name" 
                    value={name} 
                    onChange={(e) => { setName(e.target.value) }} />
                </p>
                <p>
                    <label>Type</label><br />
                    <input type="text" 
                    name="type"
                    value={type} 
                    onChange={(e) => { setType(e.target.value) }} />
                </p>
                <p>
                    <label>Description</label><br />
                    <input type="text" 
                    name="description"
                    value={description} 
                    onChange={(e) => { setDescription(e.target.value) }} />
                </p>
                <p>
                    <label>Skill #1</label><br />
                    <input type="text" 
                    name="skills1"
                    value={skills1} 
                    onChange={(e) => { setSkills1(e.target.value) }} />
                </p>
                <p>
                    <label>Skill #2</label><br />
                    <input type="text" 
                    name="skills2"
                    value={skills2} 
                    onChange={(e) => { setSkills2(e.target.value) }} />
                </p>
                <p>
                    <label>Skill #3</label><br />
                    <input type="text" 
                    name="skills3"
                    value={skills3} 
                    onChange={(e) => { setSkills3(e.target.value) }} />
                </p>
                
                <button>Update Pet</button>
            </form>
            </div>
        </div>
    )
}
    
export default Update;