import { useEffect, useState } from 'react'
import { useParams, useNavigate } from "react-router-dom"
import { getProductById, deleteProduct } from '../api/apiCalls'

const ProductPage = () => {
    const [product, setProduct] = useState()
    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getProductById(params.id, onGetProductSuccess, err => console.log(err))
    }, [])

    const onGetProductSuccess = product => {
        console.log('product: ', product)
        setProduct(product)
    }

    const onProductDelete = () => {
        deleteProduct(product, navigate('/artikli'), err => console.log(err))
    }

    if(product) {
        return (
            <>
                <h1>{product.title} </h1>
                <ul>
                    <li>{product.description}</li>
                    <li>{product.price}</li>
                    <li>{product.category}</li>
                </ul>
                <button onClick={onProductDelete}>Delete</button>
            </>
        )
    }

}

export default ProductPage