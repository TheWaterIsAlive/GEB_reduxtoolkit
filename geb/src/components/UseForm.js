import React, { useState } from 'react';
// import { useSelector, useDispatch } from "react-redux";
import { connect } from 'react-redux';
import { cacheState } from '../slices/loginSlice';


const mapDispatch = { cacheState };
const uiType = 'other';

const UserForm = ({ cacheState }) => {
    const [ user, setUserText] = useState('');
    const onChange = e => setUserText(e.target.value);
   
if(uiType === 'login'){
return(
    <form
   >
        hello
        <input id='loginLogin'></input>
        <input id='loginPassword'></input>
        <button id='loginButton' type='submit'>Log In</button>
    </form>


);
} else {
return(
    <form  onSubmit={e => {
        e.preventDefault()
        if (!user.trim()){
            return
        }
        cacheState(user)
    }}>
        <input value={user.userName} onChange={onChange} id='registerName'></input>
        <input value={user.password} onChange={onChange} id='registerPassword'></input>
        <input value={user.email} onChange={onChange} id='registerEmail'></input>
        <button type="submit" id='registerButton'>Register</button>
    </form>
);

}


}




export default connect(null, mapDispatch)(UserForm);