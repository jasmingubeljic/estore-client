import { useRef, useCallback } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { MdClear } from "react-icons/md";

const Search = (props) => {
  const inputRef = useRef();

  const onChangeHandler = (e) => {
    const val = e.target.value.trim();
    console.log("onChangeHandler", val);
  };

  const clearSearchInputHandler = useCallback(() => {
    inputRef.current.value = "";
  });

  return (
    <InputGroup className={props.className}>
      <Form.Control
        placeholder="Search products..."
        aria-label="Search products..."
        aria-describedby="search1"
        onChange={onChangeHandler}
        method="POST"
        ref={inputRef}
      />
      <Button
        type="submit"
        variant="outline-info"
        id="search1"
        className="bg-white"
      >
        <MdClear onClick={clearSearchInputHandler} />
      </Button>
    </InputGroup>
  );
};

export default Search;
