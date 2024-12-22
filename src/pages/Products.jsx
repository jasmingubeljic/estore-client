import { useEffect, useState, useCallback } from "react";
import { getProducts } from "../api/apiCalls";
import Container from "react-bootstrap/Container";
import ProductCard from "../components/product/ProductCard";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { BiSolidChevronDown } from "react-icons/bi";
import { detectScreen } from "../utils/devices";

const Products = () => {
  const [prods, setProds] = useState([]);
  const [totalProductCount, setTotalProductCount] = useState();

  let limit = 2;
  if (detectScreen() === "lg") {
    limit = 3 * 1; // limit = product cards * number of rows
  }
  if (["xl", "xxl"].includes(detectScreen())) {
    limit = 5 * 1; // limit = product cards * number of rows
  }

  useEffect(() => {
    getProducts(null, limit, onGetProductsSuccess, (err) => console.log(err));
  }, []);

  const onGetProductsSuccess = useCallback(
    ({ products, totalProductCount }) => {
      const updatedProds = [...prods, ...products];
      setProds(updatedProds);
      setTotalProductCount(totalProductCount);
    },
    [prods]
  );

  const getMoreProductsHandler = useCallback(
    (e) => {
      if (prods.length === totalProductCount) {
        return;
      }
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
          <Breadcrumb.Item active>Artikli</Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Row xs={2} sm={2} md={2} lg={3} xl={5} className="g-2">
        {prods.map((p, idx) => (
          <ProductCard key={idx} product={p} />
        ))}
      </Row>
      <Stack>
        <Button
          hidden={
            totalProductCount <= limit || prods.length === totalProductCount
          }
          className="mx-auto mt-4"
          variant="outline-info rounded-1"
          onClick={getMoreProductsHandler}
        >
          <BiSolidChevronDown className="fs-1" />
        </Button>
      </Stack>
    </Container>
  );
};

export default Products;
