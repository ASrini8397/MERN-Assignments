import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { Link, Switch, Route } from "react-router-dom";

const One = (props) => {
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const { id } = useParams();
  console.log(id);
  const [pet, setPet] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/pet/${id}`)
      .then((res) => {
        console.log(res.data);
        setPet(res.data.Pet);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const deletePet = (id) => {
    axios
      .delete("http://localhost:8000/api/pet/" + id)
      .then((res) => {
        console.log("deleted!");
        console.log(res.data);
        console.log(id);
        history.push("/");
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
  };

  return (
    <div>
      <button
        onClick={() => deletePet(pet._id)}
        style={{
          backgroundColor: "red",
          height: "50px",
          width: "90px",
          display: "inline-block",
          color: "white",
          margin: "10px",
          border: "2px solid black",
        }}
      >
        {" "}
        Adopt {pet.name}!{" "}
      </button>
      <button
        style={{
          backgroundColor: "white",
          height: "50px",
          width: "90px",
          display: "inline-block",
          color: "black",
          margin: "10px",
          border: "2px solid grey",
        }}
      >
        {" "}
        <Link to={`/`}>Home </Link>
      </button>
      <div style={{
          display: "inline"
      }}>
        <h1>Details about: </h1> <h4> {pet.name}</h4>
      </div>
      <br />
      <div
        style={{
          border: "5px solid black",
          height: "400px",
          width: "80%",
          margin: "auto",
        }}
      >
        <h3>Pet Type: </h3>
        {pet.type}
        <h3> Pet Description</h3> {pet.description} <br />
        <h3>Pet Skills: </h3> {pet.skills1} {pet.skills2} {pet.skills3}
      </div>
      <button>
        {" "}
        <Link to={`/pet/update/${pet._id}`}>Click to Edit </Link>
      </button>
    </div>
  );
};

export default One;
