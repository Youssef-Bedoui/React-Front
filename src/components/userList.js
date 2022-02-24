import React from "react";
import { useNavigate } from "react-router-dom";

function UserList({users,handleRemoveUser}) {

    let navigate = useNavigate();

   

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
            
                    {users.map((user, i) => {
                        return (
                            <tr key={i}>
                                <td id={i}>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.password}</td>
                                <td>
                                    <button id="deleteBtn" onClick={e =>  handleRemoveUser(user._id)}>Delete</button> <span> | </span>
                                    <button id="modifBtn" onClick={()=>navigate(`/modif/${user._id}`)}>Modify</button>
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

