import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function AddUser({url,handleCreate,usertoUpdate}) {

    const [user, setUser] = useState({
        name: usertoUpdate ? usertoUpdate.name : "",
        email: "",
        password: ""
    });
    const { name, email, password } = user;

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    let navigate = useNavigate();
    

    const handleClick = (event) => {

        event.preventDefault();

        
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,

        }));

    }

    return (
        <div>
            <form id="form">
                <h2>Add New User</h2>
                <div id="container">
                    <label>Name : </label>
                    <input defaultValue={name} type="text" name="name" onChange={handleInputChange}></input>
                </div>
                <div id="container">
                    <label>Email : </label>
                    <input type="email" name="email" onChange={handleInputChange}></input>
                </div>
                <div id="container">
                    <label>Password : </label>
                    <input type="password" name="password" onChange={handleInputChange}></input>
                </div>

                <button onClick={(e)=>handleCreate(user,e)}>Add User</button>

            </form>
        </div>
    )
}

export default AddUser;