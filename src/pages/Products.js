import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProducts } from '../api/apiCalls'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts(onGetProductsSuccess, err => console.log(err))
    }, [])

    const onGetProductsSuccess = prods => {
        setProducts(prods)
    }


    return (
        <>
            <h1>Products: </h1>
            <ul>
                {products.map(prod => (
                        <li key={prod.id}><Link to={`/artikli/${prod.id}`}>{prod.title}</Link></li>
                ))}
            </ul>
        </>
    )
    
}

export default Products