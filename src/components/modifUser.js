import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ModifUser(props) {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const { name, email, password } = user;

    let navigate = useNavigate();

    const handleClick = (event) => {

        event.preventDefault();

        axios.put(props.url + "/:id", { name, email, password })
            .then((response) => {
                console.log("User Modified Successfully");

                navigate("/");
            })
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,

        }));

    }

    return (
        <form id="form">
            <h2>Modif User</h2>
            <div id="container">
                <label>Name : </label>
                <input type="text" defaultValue={name} name="name" onChange={handleInputChange}></input>
            </div>
            <div id="container">
                <label>Email : </label>
                <input type="email" defaultValue={email} name="email" onChange={handleInputChange}></input>
            </div>
            <div id="container">
                <label>Password : </label>
                <input type="password" defaultValue={password} name="password" onChange={handleInputChange}></input>
            </div>

            <button onClick={handleClick}>Modify User</button>

        </form>

    )
}

export default ModifUser;