import React, { useState } from 'react';
import axiosInstance from '../utils/axios';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axiosInstance.post('/api/user/login', { email, password });
            setMessage(data.message);
            localStorage.setItem('token', data.token);
            setTimeout(() => {
                navigate('/');
            }, 1000);
        } catch (error) {
            setError(error.response.data);
        }
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-white flex-column gap-2' style={{ height: '100vh', width: '100vw' }}>
            <form onSubmit={handleLogin}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input onChange={(e) => (setEmail(e.target.value))} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input onChange={(e) => (setPassword(e.target.value))} type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
            {error && <div class="alert alert-danger d-flex align-items-center" role="alert">
                <div>
                    {!error.success && error.message}
                </div>
            </div>}
            {message && <div class="alert alert-success d-flex align-items-center" role="alert">
                <div>
                    {message}
                </div>
            </div>}

        </div>
    )
}

export default Login



