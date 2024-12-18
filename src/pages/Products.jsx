import { useEffect, useState } from "react";
import { getProducts } from "../api/apiCalls";
import Container from "react-bootstrap/Container";
import ProductCard from "../components/product/ProductCard";
import Breadcrumb from "react-bootstrap/Breadcrumb";
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
      <Row className="mx-1 py-1">
        <Breadcrumb>
          <Breadcrumb.Item active>Artikli</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row xs={2} sm={2} md={2} lg={3} xl={5} className="g-2">
        {products.map((p, idx) => (
          <ProductCard key={idx} product={p} />
        ))}
      </Row>
    </Container>
  );
};

export default Products;
