import React from 'react'
import './Login.css'
import { AiOutlineMail} from 'react-icons/ai'
import { GoKey } from 'react-icons/go'
import { useState,useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { login } from '../../features/userSlice';



const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token)

  const handleSubmit= async (e) => {
    e.preventDefault();

    dispatch(login(email,password))
  }


  return (
    <div className='loginbackground'>
        <div className='loginbox'>
            <div className='logoImage'></div>
            <div className='loginText'>Episodic series of digital audio.</div>
            <form className='form-group' onSubmit={handleSubmit}>
                <div className='form-email'>
                <AiOutlineMail className='mail-icon'/>
                <input  type="email" name="email" placeholder='E-mail adress' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                </div>
                <div className='form-password'>
                <GoKey className='key-icon'/>
                <input type="password" name="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                </div>
                <button className='loginButton' type='submit'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login