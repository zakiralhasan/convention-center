"use client"

import Link from 'next/link';
import { useState } from 'react';
import { useSession, signIn } from 'next-auth/react';
import { ToastContainer, toast } from 'react-toastify';


const Login = () => {
    const { data: session } = useSession()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        try {
            const data = await signIn('credentials', {
                redirect: false,
                email,
                password
            });
            if (session) {
                toast.success("Login successfully!")
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='login-container'>
                <div className='login-wrapper'>
                    <h2>Login</h2>
                    <div className='input-container'>
                        <input
                            type="email"
                            name="email"
                            placeholder='Enter your email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input type="password"
                            name="password"
                            placeholder='Enter your password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='login-btn-container'>
                        <button onClick={handleLogin}>Login</button>
                        <p>Don`t have an account? <Link href='../register'>Creat an account</Link> </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default Login;