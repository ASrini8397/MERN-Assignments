import React, { useState } from "react";
import axios from "axios";
import { Link, Switch, Route, Redirect, useHistory } from "react-router-dom";

const Form = () => {
  const history = useHistory();
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skills1, setSkills1] = useState(" ");
  const [skills2, setSkills2] = useState(" ");
  const [skills3, setSkills3] = useState(" ");
  const [errors, setErrors] = useState([]);

  const onSubmitHandler = (e) => {
    //prevent default behavior of the submit
    e.preventDefault();
    console.log("submitted!");

    //make a post request to create a new product
    axios
      .post("http://localhost:8000/api/pet", {
        name,
        type,
        description,
        skills1,
        skills2,
        skills3,
      })
      .then((res) => {
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        // console.error(errorResponse);
        const errorResponse = err.response.data.errors; // Get the errors from err.response.data
        console.error(errorResponse);
        
        const errorArr = []; // Define a temp error array to push the messages in
        for (const key of Object.keys(errorResponse)) {
            
          // Loop through all errors and get the messages
          errorArr.push(errorResponse[key].message);
        }
        let copyArr=[];
        copyArr= [...errorArr]
        if (errorResponse=='Name already exists'){
            copyArr.push("Name already exists, try another");
        }
        // Set Errors
        setErrors(copyArr);
      });
  };
  return (
    <>
      <div>New Pet</div>
      <Link to={"/"}>Home</Link>
      <form onSubmit={onSubmitHandler}>
        <div
          style={{
            border: "2px solid black",
            margin: "auto",
            padding: "auto",
            height: "70%",
            width: "70%",
          }}
        >
          {errors.map((err, index) => (
            <p key={index} style={{
                color: "red"
            }}>{err}</p>
          ))}
          
          <p>
            <label>Name</label>
            <br />
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </p>
          <p>
            <label>Pet Type</label>
            <br />
            <input
              type="text"
              onChange={(e) => setType(e.target.value)}
              value={type}
            />
          </p>
          <p>
            <label>Pet Description</label>
            <br />
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </p>
          <div style={{
              display: "flex",
              flexDirection: "column"
          }}>
            <p>
              <label>Skill #1</label>
              <br />
              <input
                type="text"
                onChange={(e) => setSkills1(e.target.value)}
                value={skills1}
              />
            </p>
            <p>
              <label>Skill #2</label>
              <br />
              <input
                type="text"
                onChange={(e) => setSkills2(e.target.value)}
                value={skills2}
              />
            </p>
            <p>
              <label>Skill #3</label>
              <br />
              <input
                type="text"
                onChange={(e) => setSkills3(e.target.value)}
                value={skills3}
              />
            </p>
          </div>
          <button>create</button>
        </div>
        
      </form>
    </>
  );
};

export default Form;
