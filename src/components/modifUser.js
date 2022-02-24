import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddUser from "./addUser";



function ModifUser({ url , handleModifClick}) {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const { name, email, password } = user;

    

    let { id } = useParams();


    React.useEffect(() => {
        axios.get(`${url}/${id}`).then((response) => {
            let updatedUser = {
                _id : id,
                name: response.data.name,
                email: response.data.email,
                password: response.data.password
            }

            setUser((prevState) => { return { ...prevState, ...updatedUser } });

        });
    }, []);


    return (

        <AddUser usertoUpdate={user} url={url} handleModifClick={handleModifClick}/>

    )
}

export default ModifUser;