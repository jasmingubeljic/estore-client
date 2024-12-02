import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, deleteProduct } from "../api/apiCalls";
import { apiUrl } from "../appInfo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

const ProductPage = () => {
  const [product, setProduct] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getProductById(params.id, onGetProductSuccess, (err) => console.log(err));
  }, []);

  const onGetProductSuccess = (product) => {
    console.log("product: ", product);
    setProduct(product);
  };

  const onProductDelete = () => {
    deleteProduct(params.id, product, navigate("/artikli"), (error) => {
      console.log(error);
    });
  };

  if (product) {
    return (
      <Container className="h-100">
        <Row>
          <Col>
            {" "}
            <h1>{product.title}</h1>
            <img
              src={apiUrl + "/" + product.imageUrl}
              alt={product.title}
              width="100"
            />
            <ul>
              <li>{product.description}</li>
              <li>{product.price}</li>
              <li>{product.category}</li>
            </ul>
            {/* <button
          onClick={() => {
            navigate("/artikli/" + params.id + "/promijeni");
          }}
        >
          Promijeni
        </button> */}
            <Stack direction="horizontal" gap={3}>
              <Button
                variant="primary"
                onClick={() => {
                  navigate("/artikli/" + params.id + "/promijeni");
                }}
              >
                Promijeni
              </Button>
              <Button variant="danger" onClick={onProductDelete}>
                Izbriši
              </Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default ProductPage;
