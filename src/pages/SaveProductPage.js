import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const SaveProductPage = () => {
    const navigate = useNavigate()
    const [errors, setErrors] = useState([])
    const formData = useRef()

    const submitHandler = async e => {
        e.preventDefault()
        const { title, image, price, description, category } = formData.current

        const data = new FormData()
        data.append('title', title.value)
        data.append('image', image.files[0])
        data.append('price', price.value)
        data.append('description', description.value)
        data.append('category', category.value)

        const result = await fetch('http://localhost:3001/admin/product', {
            method: 'POST', 
            body: data
        })

        if (result.status !== 200 && result.status !== 201) {
            const resData = await result.json()
            if(resData.messages) {
                setErrors(resData.messages.errors)
            } else {
                setErrors([])
            }
        } else {
            navigate('/artikli')
        }
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
                {errors.map(err => <p>{err.msg}</p>) }
            </form>
        </>
    )

}


export default SaveProductPage