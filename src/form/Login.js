import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [data, setData] = useState({
        username: '',
        password: '',
        isLogined: false
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({
            username: data.username,
            password: data.password
        }
        );


        await axios.post('http://localhost:4000/login', {
            username: data.username,
            password: data.password
        })
            .then((response) => {
                if (response.status === 200) {
                    setData({ ...data, isLogined: true });
                    localStorage.setItem('login', data.isLogined);
                }
            })
            .catch(error => {
                setData(prevData => ({ ...prevData, isLogined: false }));
                alert('Invalid credentials');
                localStorage.setItem('login', data.isLogined);
            });
    }

    const nav = useNavigate()

    useEffect(() => {
        console.log(data.isLogined);
        if (data.isLogined) {

            alert(data.isLogined);
            nav('/home');
            localStorage.setItem('login', data.isLogined);

        } else {
            nav('/');
        }
    }, [data.isLogined]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }))
    }

    return (
        <>
            <h1>
                Login Form
            </h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <input type='text' name='username' value={data.username} onChange={handleChange} placeholder='User Name or mail-id' />
                </div>
                <div>
                    <input type='password' name='password' value={data.password} onChange={handleChange} placeholder='password' />
                </div>
                <input type='submit'></input>
            </form>
        </>
    )
};