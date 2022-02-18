import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import AddUser from "./addUser";



function ModifUser({ url }) {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const { name, email, password } = user;
    let navigate = useNavigate();

    let { id } = useParams();


    React.useEffect(() => {
        axios.get(`${url}/${id}`).then((response) => {
            let updatedUser = {
                name: response.data.name,
                email: response.data.email,
                password: response.data.password
            }
            setUser((prevState) => { return { ...prevState, ...updatedUser } });

        });
    }, []);


    const handleClick = (event) => {
        event.preventDefault();
        console.log(user)
        axios.put(`${url}/${id}`, user)

        .then((response) => { console.log(response) });
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        
        }));
       console.log(name,value)
    }

    return (

        <AddUser usertoUpdate={user}/>

    )
}

export default ModifUser;