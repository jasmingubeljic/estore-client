import { useEffect, useState } from "react";
import { getProducts } from "../api/apiCalls";
import Container from "react-bootstrap/Container";
import ProductCard from "../components/product/ProductCard";

import Row from "react-bootstrap/Row";

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
      <h1>Products: </h1>
      <Row xs={1} sm={2} md={3} lg={5} className="g-2">
        {products.map((p, idx) => (
          <ProductCard key={idx} product={p} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
