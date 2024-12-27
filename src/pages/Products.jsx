import { useEffect, useState, useCallback } from "react";
import { getProducts } from "../api/apiCalls";
import FeedExpanding from "../components/feed/FeedExpanding";
import Container from "react-bootstrap/Container";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import { detectScreen } from "../utils/devices";

const Products = () => {
  const [prods, setProds] = useState([]);
  const [totalProductCount, setTotalProductCount] = useState();
  const [fetching, setFetching] = useState(true);

  let limit = 2;
  if (detectScreen() === "lg") {
    limit = 3 * 1; // limit = product cards * number of rows
  }
  if (["xl", "xxl"].includes(detectScreen())) {
    limit = 5 * 1; // limit = product cards * number of rows
  }

  useEffect(() => {
    setFetching(true);
    getProducts(null, limit, onGetProductsSuccess, (err) => console.log(err));
  }, []);

  const onGetProductsSuccess = useCallback(
    ({ products, totalProductCount }) => {
      const updatedProds = [...prods, ...products];
      setProds(updatedProds);
      setTotalProductCount(totalProductCount);
      setFetching(false);
    },
    [prods]
  );

  const getMoreProductsHandler = useCallback(
    (e) => {
      if (prods.length === totalProductCount) {
        return;
      }
      setFetching(true);
      getProducts(prods.length, limit, onGetProductsSuccess, (err) =>
        console.log(err)
      );
    },
    [prods, totalProductCount, limit]
  );

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
