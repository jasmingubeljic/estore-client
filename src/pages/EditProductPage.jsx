import { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getProductById,
  updateProductById,
  getCategories,
} from "../api/apiCalls";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import EditProductForm from "../components/forms/EdtiProductForm/EditProductForm.jsx";
import Loader from "../components/loader/Loader";

const EditProductPage = (props) => {
  const formData = useRef();
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState();
  const [categories, setCategories] = useState();

  useEffect(() => {
    getCategories(onGetCategoriesSuccess, (err) => console.log(err));
  }, []);

  useEffect(() => {
    getProductById(
      params.id,
      (r) => {
        setProduct(r);
        console.log("product: ", product);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  const onGetCategoriesSuccess = useCallback((r) => {
    console.log(r);
    setCategories(r);
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
            <EditProductForm
              onSubmit={submitHandler}
              product={product}
              categories={categories}
            />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return <Loader />;
  }
};

export default EditProductPage;
