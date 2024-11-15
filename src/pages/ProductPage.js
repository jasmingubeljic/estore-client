import { useParams } from "react-router-dom"

const ProductPage = () => {
    const params = useParams()

    return <h1>Product {params.id} </h1>
}

export default ProductPage