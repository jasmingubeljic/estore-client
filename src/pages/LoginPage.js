import { logIn } from "../api/apiCalls";
import LoginForm from "../components/login-form/LoginForm";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiUrl } from "../appInfo";

const LoginPage = () => {
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const { email, password } = e.target;
    const data = {
      email: email.value.trim(),
      password: password.value.trim(),
    };
    const res = await fetch(`${apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resData = await res.json();
    console.log(res);
    if (!res.ok) {
      console.log("failed");
      return setErrors(resData.messages);
    }
    localStorage.setItem("userAndToken", JSON.stringify(resData));
    setErrors([]);
    navigate("/artikli");
  };

  return (
    <Container>
      <LoginForm onSubmit={submitHandler} />
    </Container>
  );
};

export default LoginPage;
