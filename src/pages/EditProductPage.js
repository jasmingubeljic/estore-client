import { useEffect, useRef } from 'react'
import { useParams } from "react-router-dom"
import { getProductById } from '../api/apiCalls'

const EditProductPage = () => {
    const formData = useRef()
    const params = useParams()

    useEffect(() => {
        getProductById(params.id, r => {
            console.log('success', r)
        }, err => {
            console.log(err)
        })
    }, [])

    const submitHandler = async e => {
                e.preventDefault()
                const { title, price, description, category } = formData.current
                const body = {
                    title: title.value,
                    description: description.value,
                    price: price.value,
                    category: category.value
                }

                const result = await fetch('http://localhost:3001/admin/create-product', {
                    method: 'POST', 
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                })

                console.log('result: ', result.json())
            }

        
           
    return (
        <>
            <h1>Product {params.id} </h1>
            <form onSubmit={submitHandler} method="post" ref={formData}>
                <label htmlFor="title">Naziv artikla:</label><br></br>
                <input id="title" name="title" type="text" /><br></br>
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
            </form>
        </>
    )
    
}

export default EditProductPage