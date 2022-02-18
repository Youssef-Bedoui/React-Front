// import logo from './logo.svg';
import '../App.css';
import React from "react";
import axios from "axios";
import AddUser from './addUser';
import UserList from "./userList";
import ModifUser from './modifUser';
import Header from "./header";
import { Route, Routes, useNavigate } from 'react-router-dom';




const baseUrl = "http://localhost:5000/users";

function App() {

  let navigate = useNavigate();

  const [users, setUsers] = React.useState([]);

  const handleRemoveUser = (id) => {

    axios.delete(baseUrl + `/${id}`)
      .then((response) => {

        setUsers(users.filter((user) => user._id !== id));
      })
  }

  const handleCreate = (user, e) => {
    e.preventDefault();

    axios.post(baseUrl, { name: user.name, email: user.email, password: user.password })
      .then((response) => {

        setUsers([...users, user])

        navigate("/");

      })
  }

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => { setUsers(response.data) })
  }, []);


  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<UserList url={baseUrl} users={users} handleRemoveUser={handleRemoveUser} />} />
        <Route path="/add" element={<AddUser url={baseUrl} handleCreate={handleCreate} />} />
        <Route path="/modif/:id" element={<ModifUser url={baseUrl} />} />
      </Routes>
    </div>
  );
}

export default App;