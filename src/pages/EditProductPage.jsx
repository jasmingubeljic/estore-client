import { useState, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProductById, updateProductById } from "../api/apiCalls";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditProductForm from "../components/forms/EdtiProductForm/EditProductForm.jsx";
import Loader from "../components/loader/Loader";

const EditProductPage = () => {
  const formData = useRef();
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState();

  useEffect(() => {
    getProductById(
      params.id,
      (r) => {
        setProduct(r);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    updateProductById(
      params.id,
      e.target,
      (success) => {
        navigate(`/products/${success.id}`);
      },
      (err) => {
        console.log(err);
        if (err.err.name === "TokenExpiredError") {
          return navigate("/login");
        }
      }
    );
  };

  if (product) {
    return (
      <Container>
        <Row>
          <Col xs={12} sm={6}>
            <h1>{product.title}</h1>
            <EditProductForm onSubmit={submitHandler} product={product} />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <Loader />;
  }
};

export default EditProductPage;
