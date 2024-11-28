import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./EditProductForm.module.scss";

const EditProductForm = (props) => {
  const imgPreview = useRef();

  const onImageSelect = async (e) => {
    console.log("e: ");
    const files = e.target.files[0];
    if (files) {
      const fileReader = new FileReader();
      const fileReaderObj = await fileReader.readAsDataURL(files);

      fileReader.addEventListener("load", function () {
        imgPreview.current.style.display = "block";
        imgPreview.current.innerHTML = `<img src="${this.result}" class=${styles.imgPreview} />`;
      });
    }
  };

  return (
    <>
      <Form onSubmit={props.onSubmit} method="POST">
        <Form.Group className="mb-3" controlId="formProductTitle">
          <Form.Label>Naziv artikla</Form.Label>
          <Form.Control name="title" type="title" placeholder="Naziv artikla" />
        </Form.Group>
        <div ref={imgPreview}></div>
        <Form.Group className="mb-3" controlId="formProductImage">
          <Form.Label>Slika artikla</Form.Label>
          <Form.Control
            name="image"
            type="file"
            accept="image/*"
            id="choose-file"
            placeholder="Slika artikla"
            onChange={onImageSelect}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProductDescription">
          <Form.Label>Opis</Form.Label>
          <Form.Control
            name="description"
            type="description"
            placeholder="Naziv artikla"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProductPrice">
          <Form.Label>Cijena</Form.Label>
          <Form.Control name="price" type="price" placeholder="Cijena" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formProductCategory">
          <Form.Label>Kategorija</Form.Label>
          <Form.Control
            name="category"
            type="category"
            placeholder="Kategorija"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
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
