import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

function UserList(props) {

    let navigate = useNavigate();

    
    const handleDelete = (index, e) => {
        e.preventDefault();
        
        let data = props.users.filter((v, i) => i === index);
        console.log(data);
        let deletedUser = data[0]._id;
        console.log(deletedUser)

        axios.delete(props.url + `/${deletedUser}`)
            .then((response) => {

                console.log("User deleted Successfully");
            })
    }
    const handleModify = (index, e) => {

        let data = props.users.filter((v, i) => i === index);
        console.log(data);
        document.getElementById("modifBtn").value = [data[0].name,data[0].email,data[0].password];
        console.log(e.target.value);

        axios.delete(props.url)
            .then((response) => {

                console.log("User deleted Successfully");
                //refrech component
                window.location.reload(false);
            })

        navigate("/modif");
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Action</th>
                    </tr>
                </thead>
            
                <tbody>
            
                    {props.users.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td id={i} onClick={handleDelete}>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button id="deleteBtn" onClick={e => handleDelete(i, e)}>Delete</button> <span> | </span>
                                    <button id="modifBtn" onClick={e => handleModify(i, e)}>Modify</button>
                                </td>
                            </tr>
                        )
                    })}
            
                </tbody>
            </table>

        </div>
    )
}

export default UserList;

