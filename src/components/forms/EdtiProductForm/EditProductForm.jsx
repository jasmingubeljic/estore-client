import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Stack from "react-bootstrap/Stack";
import styles from "./EditProductForm.module.scss";
import { prodDir } from "../../../appInfo";

const EditProductForm = (props) => {
  const [imgSrc, setImgSrc] = useState("");
  const [validated, setValidated] = useState(false);

  const navigate = useNavigate();

  const product = props.product || {
    title: "",
    description: "",
    price: "",
    categoryId: "",
    isUsed: false,
    isHidden: false,
  };

  useEffect(() => {
    if (props.product) {
      setImgSrc(prodDir + props.product.image);
    }
  }, [props.product]);

  const onImageSelect = useCallback(async (e) => {
    const files = e.target.files[0];
    if (files) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(files);
      fileReader.addEventListener("load", function () {
        setImgSrc(this.result);
      });
    }
  }, []);

  const onSubmit = useCallback((event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    if (form) {
      if (form.title.value && form.description.value && form.price.value && form.categoryId.value) {
        if (props.product?.image || form.image.files.length !== 0) {
          props.onSubmit(event);
        } else {
          console.info("product update/creation stopped");
        }
      }
    }
  }, []);

  return (
    <>
      <Form noValidate validated={validated} onSubmit={onSubmit} method="POST">
        <Form.Group className="mb-4" controlId="formProductTitle">
          <Form.Label>Product name</Form.Label>
          <Form.Control size="lg" name="title" type="title" required defaultValue={product.title} maxLength="150" />
        </Form.Group>
        <Image src={imgSrc} className={styles.imgPreview} />
        <Form.Group className="mb-4" controlId="formProductImage">
          <Form.Label>Product image</Form.Label>
          <Form.Control name="image" type="file" accept="image/*" required={!product.title} onChange={onImageSelect} />
          <Form.Text>The image formats that can be uploaded include JPG, PNG, and GIF.</Form.Text>
        </Form.Group>
        <Form.Group className="mb-4" controlId="formProductDescription">
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" as="textarea" defaultValue={product.description} style={{ height: "100px" }} maxLength="500" />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formProductPrice">
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" type="number" defaultValue={product.price} size="lg" />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Label>Condition</Form.Label>
          <Form.Check aria-label="isUsed" label="Used" name="isUsed" type="switch" defaultChecked={product.isUsed} />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formProductCategory">
          <Form.Label>Category</Form.Label>
          <Form.Select name="categoryId" defaultValue={product.categoryId} size="lg">
            <option key="alkjsdf" value={""}></option>
            {props.categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.title}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4">
          {/* <Form.Label>Hidden</Form.Label> */}
          <Form.Check aria-label="isHidden" label="Hidden" name="isHidden" type="switch" defaultChecked={product.isHidden} />
          <Form.Text className="text-muted">The hidden product will not be visible to users on the page.</Form.Text>
        </Form.Group>

        <Stack direction="horizontal" gap={3}>
          <Button variant="primary" type="submit">
            Save
          </Button>
          <Button variant="outline-warning" onClick={() => navigate(-1)}>
            Cancel
          </Button>
        </Stack>
      </Form>
    </>
  );
};

export default EditProductForm;
