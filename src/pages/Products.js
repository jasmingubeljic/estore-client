import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProducts } from "../api/apiCalls";
import Container from "react-bootstrap/Container";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(onGetProductsSuccess, (err) => console.log(err));
  }, []);

  const onGetProductsSuccess = (prods) => {
    setProducts(prods);
  };

  return (
    <Container>
      <h1 className="text-red">Products: </h1>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <Link to={`/artikli/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default Products;
