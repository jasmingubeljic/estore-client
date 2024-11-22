import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { getProductById, updateProductById } from '../api/apiCalls'
import { apiUrl } from '../appInfo'

const EditProductPage = () => {
    const formData = useRef()
    const params = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState()

    useEffect(() => {
        getProductById(params.id, r => {
            setProduct(r)
        }, err => {
            console.log(err)
        })
    }, [])

    const submitHandler = async e => {
        e.preventDefault()
        updateProductById(
            params.id,
            formData.current,
            success => {
                navigate(`/artikli/${success.id}`)
            },
            err => {
                console.log('failed: ', err)
            }
        )
    }

        
    if(product) {
        return (
            <>
                <h1>{product.title} </h1>
                <form onSubmit={submitHandler} method="post" ref={formData}>
                    <label htmlFor="title">Naziv artikla:</label><br></br>
                    <input id="title" name="title" type="text" defaultValue={product.title}  /><br></br>
                    <br></br>
                    <label htmlFor="image">Postavi sliku:</label><br></br>
                    <input type="file" id="image" name="image"  accept="image/*" /><br></br>
                    <br></br>
                    <img src={apiUrl+'/'+product.imageUrl} alt={product.title} width="100" /> 
                    <br></br>
                    <label htmlFor="description">Opis:</label><br></br>
                    <textarea id="description" name="description" type="text" defaultValue={product.description}></textarea><br></br>
                    <br></br>
                    <label htmlFor="price">Cijena:</label><br></br>
                    <input id="price" name="price" type="text" defaultValue={product.price}  /><br></br>
                    <br></br>
                    <label htmlFor="category">Kategorija:</label><br></br>
                    <input id="category" name="category" type="text" defaultValue={product.category} /><br></br>
                    <br></br>
                    <button type="submit">Promijeni</button>
                </form>
            </>
        )
    } else {
        return <p>Loading...</p>
    }
    
}

export default EditProductPage