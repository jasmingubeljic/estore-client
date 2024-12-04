import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Badge from "react-bootstrap/Badge";
import { apiUrl } from "../../appInfo";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <Col>
      <Card /*border="dark"*/ className="shadow">
        <Link to={"/artikli/" + product.id}>
          <Card.Img
            variant="top"
            src={apiUrl + "/" + product.imageUrl}
            className={styles["image-sizing"]}
            // className="ratio ratio-1x1"
          />
          <Card.Body className="p-2">
            <Stack gap={1}>
              <Card.Title>{product.title}</Card.Title>
              <Stack direction="horizontal" gap={1}>
                <Card.Text className="my-auto">{product.description}</Card.Text>
                <Badge
                  className="ms-auto my-auto py-2 px-2 bg-white text-primary fs-5"
                  bg="primary"
                >
                  {product.price} KM
                </Badge>
              </Stack>
            </Stack>
          </Card.Body>
        </Link>
      </Card>
    </Col>
  );
};

export default ProductCard;
