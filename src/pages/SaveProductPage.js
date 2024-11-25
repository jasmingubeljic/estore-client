import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { createProduct } from '../api/apiCalls'
import { apiUrl } from '../appInfo'

const SaveProductPage = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])
    const formData = useRef()

    const submitHandler = async e => {
        e.preventDefault()    
        createProduct(
            formData.current,
            resData => {
                console.log("resData: ", resData)
                navigate('/artikli')
                
            },
            err => {
                console.log('err', err)
                setErrors(err.messages.errors)
            }
        )
    }

    return (
        <>
            <h1>Objavi novi artikal</h1>
            <form onSubmit={submitHandler} method="post" ref={formData}>
                <label htmlFor="title">Naziv artikla:</label><br></br>
                <input id="title" name="title" type="text" /><br></br>
                <br></br>
                <label htmlFor="image">Postavi sliku:</label><br></br>
                <input type="file" id="image" name="image"  accept="image/*" /><br></br>
                <br></br>
                <label htmlFor="description">Opis:</label><br></br>
                <textarea id="description" name="description" type="text"></textarea><br></br>
                <br></br>
                <label htmlFor="price">Cijena:</label><br></br>
                <input id="price" name="price" type="text" /><br></br>
                <br></br>
                <label htmlFor="category">Kategorija:</label><br></br>
                <input id="category" name="category" type="text" /><br></br>
                <br></br>
                <button type="submit">Objavi</button>
                {errors && errors.map(err => <p key={err.msg}>{err.msg}</p>) }
            </form>
        </>
    )

}


export default SaveProductPage