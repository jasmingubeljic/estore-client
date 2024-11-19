import { logIn } from '../api/apiCalls'
import { useState, useRef } from 'react'

const LoginPage = () => {
    const formData = useRef();
    const [errors, setErrors] = useState([])

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     const { email, password } = formData.current
    //     return logIn(email, password, () => {}, () => {})
    // }
    const submitHandler = e => {
        e.preventDefault()
        const { email, password } = formData.current
        const data = {
            email: email.value,
            password: password.value
        }
        fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(resData => {
            console.log(resData)
            if(resData.messages) {
                setErrors(resData.messages.errors)
            } else {
                setErrors([])
            }
        })
        .catch(err => console.log(err))
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
                {errors.map(err => <p>{err.msg}</p>) }
            </form>
        </>
    )
}

export default LoginPage