import { useEffect, useState } from "react";
import { getProducts } from "../api/apiCalls";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import FeedExpanding from "../components/feed/FeedExpanding";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts(null, 4, onGetProductsSuccess, (err) => console.log(err));
  }, []);

  const onGetProductsSuccess = ({ products, totalProductCount }) => {
    setProducts(products);
  };
  return (
    <>
      <Container>
        <Row className="mx-1 py-1">
          <Breadcrumb>
            <Breadcrumb.Item active>Home</Breadcrumb.Item>
          </Breadcrumb>
        </Row>
        <FeedExpanding />
      </Container>
    </>
  );
};

export default HomePage;
