import { useEffect, useState, useCallback } from "react";
import { getProducts } from "../../api/apiCalls";
import ProductCard from "../product/ProductCard";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { BiSolidChevronDown } from "react-icons/bi";
import { detectScreen } from "../../utils/devices";
import ProductCardPlaceholderGroup from "../product/ProductCardPlaceholderGroup";

const FeedExpanding = () => {
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
    <>
      <Row xs={2} sm={2} md={2} lg={3} xl={5} className="g-2">
        {prods.map((p, idx) => (
          <ProductCard key={idx} product={p} />
        ))}
        {fetching && <ProductCardPlaceholderGroup cardQuantity={limit} />}
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
    </>
  );
};

export default FeedExpanding;
