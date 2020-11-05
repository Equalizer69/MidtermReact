import react, { useState } from 'react';
import Header from '../../Components/Header/header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const model = {
        user: "",
        password: ""
    }
    const [state, updateState] = useState(model);

    const UserRegistration = () => {
        if(state.user == "" || state.password == ""){ alert("შეავსეთ ველები"); return; }else{
        localStorage.setItem('user', state.user);
        localStorage.setItem('password', state.password);
        alert("გილოცავთ თქვენ წარმატებით გაიარეთ რეგისტრაცია")
        window.location = "/login"
        }
        // toast("Wow so easy !");
    }
    return(
        <>
            <Header></Header>
            <input type="text" placeholder="მომხარებელი" onChange={e => updateState({ ...state, user: e.target.value })} defaultValue={state.user} /><br />
            <input type="password" placeholder="პაროლი" onChange={e => updateState({ ...state, password: e.target.value })} defaultValue={state.password} /><br />
            <button onClick={() => UserRegistration()}>რეგისტრაცია</button>
        </>
    )
}

export default Registration;