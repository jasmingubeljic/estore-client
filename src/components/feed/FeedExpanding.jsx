import { useEffect, useState, useCallback, useContext } from "react";
import { getProducts } from "../../api/apiCalls";
import ProductCard from "../product/ProductCard";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { BiSolidChevronDown } from "react-icons/bi";
import { detectScreen } from "../../utils/devices";
import ProductCardPlaceholderGroup from "../product/ProductCardPlaceholderGroup";
import { Context } from "../../store/context-store";

const FeedExpanding = () => {
  const { state, dispatch } = useContext(Context);
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

  const onGetProductsSuccess = useCallback(({ products }) => {
    setTotalProductCount(products.count);
    setFetching(false);
    dispatch({ type: "SET_PRODUCTS", payload: products.rows });
  }, []);

  const onGetMoreProductsSuccess = useCallback(({ products }) => {
    setTotalProductCount(products.count);
    dispatch({ type: "ADD_MORE_PRODUCTS", payload: products.rows });
    setFetching(false);
  }, []);

  const getMoreProductsHandler = useCallback(
    (e) => {
      if (state.products.length === totalProductCount) {
        return;
      }
      setFetching(true);
      getProducts(
        state.products.length,
        limit,
        onGetMoreProductsSuccess,
        (err) => console.log(err)
      );
    },
    [state.products, totalProductCount, limit]
  );

  return (
    <>
      <Row xs={2} sm={2} md={2} lg={3} xl={5} className="g-2">
        {state.products.map((p, idx) => (
          <ProductCard key={idx} product={p} />
        ))}
        {fetching && <ProductCardPlaceholderGroup cardQuantity={limit} />}
      </Row>
      <Stack>
        <Button
          hidden={
            totalProductCount <= limit ||
            state.products.length === totalProductCount
          }
          className="mx-auto mt-4"
          variant="outline-info rounded-1"
          onClick={getMoreProductsHandler}
        >
          <BiSolidChevronDown className="fs-1" />
        </Button>
      </Stack>
      {state.products.length === 0 && (
        // <p>
        //   Upload your product first to attract potential buyers quickly—an
        //   excellent opportunity!
        // </p>
        <p>
          Be the first to showcase your product and connect with your potential
          customers.
        </p>
      )}
    </>
  );
};

export default FeedExpanding;
