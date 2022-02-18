// import logo from './logo.svg';
import '../App.css';
import React from "react";
import axios from "axios";
import AddUser from './addUser';
import UserList from "./userList";
import ModifUser from './modifUser';
import Header from "./header";
import { Route,Routes } from 'react-router-dom';




const baseUrl = "http://localhost:5000/users";

function App() {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    axios.get(baseUrl).then((response) => { setUsers(response.data) })
  }, []);


  return (
    <div>
      <Header/>

      <Routes>
        <Route path="/" element = {<UserList url={baseUrl} users={users}/>}/>
        <Route path="/add" element = {<AddUser url={baseUrl}/>}/>
        <Route path="/modif" element = {<ModifUser url={baseUrl} users={users} setUser={setUsers}/>}/>
      </Routes>
    </div>
  );
}

export default App;