
import { Link } from 'react-router-dom'

const Products = () => {
    const PRODUCTS = [
        {id: 1, title: 'Product 1'},
        {id: 2, title: 'Product 2'},
        {id: 3, title: 'Product 3'},
        {id: 4, title: 'Product 4'},
    ]
    return (
        <>
            <h1>Products: </h1>
            <ul>
                {PRODUCTS.map(prod => (
                    <Link to={`/products/${prod.id}`}>{prod.title}</Link>
               ))}
            </ul>
        </>
    )
}

export default Products