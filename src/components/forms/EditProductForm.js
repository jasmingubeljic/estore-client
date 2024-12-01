import { useState, useEffect, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import styles from "./EditProductForm.module.scss";
import { apiUrl } from "../../appInfo";

const EditProductForm = (props) => {
  const [imgSrc, setImgSrc] = useState("");
  const [validated, setValidated] = useState(false);
  const product = props.product || {
    title: "",
    description: "",
    price: "",
    category: "",
  };

  useEffect(() => {
    if (props.product) {
      console.log(apiUrl + props.product.imageUrl);
      setImgSrc(apiUrl + "/" + props.product.imageUrl);
    }
  }, [props.product]);

  useEffect(() => {
    console.log("validated: ", validated);
  }, [validated]);

  console.log("product.image", product);

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
      if (
        form.title.value &&
        form.description.value &&
        form.price.value &&
        form.category.value
      ) {
        if (props.product?.imageUrl || form.image.files.length !== 0) {
          props.onSubmit(event);
        }
      }
    }
  }, []);

  return (
    <>
      <Form noValidate validated={validated} onSubmit={onSubmit} method="POST">
        <Form.Group className="mb-3" controlId="formProductTitle">
          <Form.Label>Naziv artikla</Form.Label>
          <Form.Control
            name="title"
            type="title"
            placeholder="Naziv artikla"
            required
            defaultValue={product.title}
          />
        </Form.Group>
        <Image src={imgSrc} className={styles.imgPreview} />
        <Form.Group className="mb-3" controlId="formProductImage">
          <Form.Label>Slika artikla</Form.Label>
          <Form.Control
            name="image"
            type="file"
            accept="image/*"
            required={!product.title}
            placeholder="Slika artikla"
            onChange={onImageSelect}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProductDescription">
          <Form.Label>Opis</Form.Label>
          <Form.Control
            name="description"
            type="description"
            required
            placeholder="Opisi artikal"
            defaultValue={product.description}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProductPrice">
          <Form.Label>Cijena</Form.Label>
          <Form.Control
            name="price"
            type="number"
            required
            placeholder="Cijena"
            defaultValue={product.price}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProductCategory">
          <Form.Label>Kategorija</Form.Label>
          <Form.Control
            name="category"
            type="category"
            required
            placeholder="Kategorija"
            defaultValue={product.category}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default EditProductForm;
