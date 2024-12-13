import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Badge from "react-bootstrap/Badge";
import { apiUrl } from "../../appInfo";
import TimeAgo from "react-timeago";
import styles from "./ProductCard.module.scss";

const ProductCard = ({ product }) => {
  return (
    <Col>
      <Card /*border="info"*/ className="shadow-sm">
        <Link to={"/artikli/" + product.id}>
          <Card.Img
            variant="top"
            src={apiUrl + "/" + product.imageUrl}
            className={styles["image-sizing"]}
            // className="ratio ratio-1x1"
          />
          <Card.Body className="p-2 pb-0">
            <Stack gap={1}>
              <Card.Title
                className={`text-dark text-truncate ${styles["card-title"]}`}
              >
                {product.title}
              </Card.Title>
              <Stack direction="horizontal" gap={1}>
                <Card.Text
                  className={`my-auto text-info text-truncate ${styles["time-ago"]}`}
                >
                  <TimeAgo date={product.createdAt} />
                </Card.Text>
                <Badge className="ms-auto my-auto py-2 px-2 bg-white text-info fs-6">
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
