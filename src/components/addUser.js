import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


function AddUser({ url, handleCreate, usertoUpdate, id ,handleModifClick}) {
    console.log(usertoUpdate);

    const [user, setUser] = useState({
        name: usertoUpdate ? usertoUpdate.name : "",
        email: usertoUpdate ? usertoUpdate.email : "",
        password: usertoUpdate ? usertoUpdate.password : ""
    });
    const { name, email, password } = user;
    console.log( usertoUpdate ? usertoUpdate.name : "")

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

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
                    <input defaultValue={email} type="email" name="email" onChange={handleInputChange}></input>
                </div>
                <div id="container">
                    <label>Password : </label>
                    <input defaultValue={password} type="password" name="password" onChange={handleInputChange}></input>
                </div>

                <button onClick={usertoUpdate ? (e) => handleModifClick(e,user,id) : (e) => handleCreate(user, e)}>Add User</button>
            </form>
        </div>
    )
}

export default AddUser;