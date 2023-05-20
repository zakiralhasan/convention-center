"use client"

import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const data = await axios.post('http://localhost:3000/api/register', {
                name, email, password
            })
            console.log(data)
            if (data.status !== 500) {
                toast.success('Your account has been successfully created!')
            }
            setName('')
            setEmail('')
            setPassword('')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className='login-container'>
                {/* { */}

                <form onSubmit={handleRegister}>
                    <div className='login-wrapper'>
                        <h2>Register</h2>
                        <div className='input-container'>
                            <input
                                type="text"
                                name='name'
                                placeholder='Enter your name'
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter your email'
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                name="password"
                                placeholder='Enter your password'
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='login-btn-container'>
                            <button type='submit'>Register</button>
                            <p>Have an account? <Link href='../login'>Login your account</Link> </p>
                        </div>
                    </div>
                </form>
                <ToastContainer />
                {/* } */}
            </div>
        </>
    );
};

export default Register;