import { logIn } from '../api/apiCalls'
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { apiUrl } from '../appInfo'

const LoginPage = () => {
    const formData = useRef();
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()


    const submitHandler = async e => {
        e.preventDefault()
        const { email, password } = formData.current
        const data = {
            email: email.value,
            password: password.value
        }
        const res = await fetch(`${apiUrl}/auth/login`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const resData = await res.json()
        console.log(res)
        if (!res.ok) {
            console.log('failed')
            return setErrors(resData.messages)
        } 
        localStorage.setItem("userAndToken", JSON.stringify(resData))
        setErrors([])
        navigate('/artikli')
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={submitHandler} method="post" ref={formData} >
                <label htmlFor="email">Email:</label><br></br>
                <input id="email" name="email" type="email" /><br></br>
                <br></br>
                <label htmlFor="password">Password:</label><br></br>
                <input id="password" name="password" type="password" /><br></br>
                <br></br>
                <button type="submit">Login!</button>
                <br></br>
                {errors && errors.map(err => <p>{err}</p>) }
            </form>
        </>
    )
}

export default LoginPage