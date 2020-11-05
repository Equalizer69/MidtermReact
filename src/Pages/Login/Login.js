import react, { useState } from 'react';
import Header from '../../Components/Header/header';
import Dashboard from '../Dashboard/Dashboard';
import {Redirect} from 'react-router-dom';

const Login = () => {
    const model = {
        user: "",
        password: ""
    }
    const [state, updateState] = useState(model);

    const UserLogin = () => {
        if(state.user == localStorage.getItem("user") && state.password == localStorage.getItem("password")){
            console.log("dsa");
            window.location = "/Dashboard"
        }
    }
    return(
        <>
            <Header></Header>
            <input type="text" placeholder="მომხარებელი" defaultValue={state.user} onChange={e => updateState({ ...state, user: e.target.value })}/><br />
            <input type="password" placeholder="პაროლი" defaultValue={state.password}  onChange={e => updateState({ ...state, password: e.target.value })}/><br />
            <button onClick={() => UserLogin()}>ავტორიზაცია</button>
        </>
    )
}

export default Login;