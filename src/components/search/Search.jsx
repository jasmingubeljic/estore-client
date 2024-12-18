import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { BiSearchAlt } from "react-icons/bi";

const Search = (props) => {
  const onChangeHandler = (e) => {
    const val = e.target.value.trim();
    console.log("onChangeHandler", val);
  };

  const onSubmitHandler = (e) => {
    const val = e.target.value.trim();
    console.log("on sumbit: ".val);
  };

  return (
    <InputGroup className={props.className}>
      <Form.Control
        placeholder="Search products..."
        aria-label="Search products..."
        aria-describedby="search1"
        onChange={onChangeHandler}
        method="POST"
        onSubmit={onSubmitHandler}
      />
      <Button type="submit" variant="outline-info" id="search1">
        <BiSearchAlt />
      </Button>
    </InputGroup>
  );
};

export default Search;
