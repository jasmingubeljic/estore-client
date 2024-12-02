import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../api/apiCalls";
import { apiUrl } from "../appInfo";
import Container from "react-bootstrap/Container";
import EditProductForm from "../components/forms/EditProductForm";

const SaveProductPage = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    createProduct(
      e.target,
      (resData) => {
        console.log("resData: ", resData);
        navigate("/artikli");
      },
      (err) => {
        console.log(err);
        if (err.err?.name === "TokenExpiredError") {
          return navigate("/prijava");
        }
        setErrors(err.messages.errors);
      }
    );
  };

  return (
    <Container>
      <h1>Objavi novi artikal</h1>
      <EditProductForm onSubmit={submitHandler} />
      {errors && errors.map((err) => <p key={err.msg}>{err.msg}</p>)}
    </Container>
  );
};

export default SaveProductPage;
