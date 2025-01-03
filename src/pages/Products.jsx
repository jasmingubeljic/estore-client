import { useEffect, useState, useCallback } from "react";
import { getProducts } from "../api/apiCalls";
import FeedExpanding from "../components/feed/FeedExpanding";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import { detectScreen } from "../utils/devices";

const Products = () => {
  return (
    <Container>
      <Row className="mx-1 py-1">
        <Breadcrumb>
          <Breadcrumb.Item active>Products</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <FeedExpanding />
    </Container>
  );
};

export default Products;
