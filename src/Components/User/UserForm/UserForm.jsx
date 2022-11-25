import { useState } from "react";
import { Button, ButtonGroup, Container, Input } from "../../Layout";

const UserForm = ({ handleAddUser, closeLightBox }) => {
  const [input, setInput] = useState({
    name: "",
    phone: "",
    location: "",
  });
  const [emptyError, setEmptyError] = useState({
    name: false,
    phone: false,
    location: false,
  });
  const inputHandler = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setEmptyError({ name: false, phone: false, location: false });
    setInput({ ...input, [inputName]: inputValue });
  };
  const formHandler = (e) => {
    e.preventDefault();
    if (input.name.length < 0) {
      setEmptyError({ ...emptyError, name: true });
      console.log("name");
    } else if (input.phone.length < 0) {
      setEmptyError({ ...emptyError, phone: true });
      console.log("phone");
    } else if (input.location.length < 0) {
      setEmptyError({ ...emptyError, location: true });
      console.log("location");
    } else {
      handleAddUser(input);
      closeLightBox();
      console.log("successfully");
    }
  };
  return (
    <Container>
      <form onSubmit={formHandler} className="add-user-form">
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={input.name}
          onChange={inputHandler}
          className={emptyError.name ? "error" : null}
        />
        <Input
          type="text"
          name="phone"
          placeholder="Phone"
          value={input.phone}
          onChange={inputHandler}
          className={emptyError.phone ? "error" : null}
        />
        <Input
          type="text"
          name="location"
          placeholder="Location"
          value={input.location}
          onChange={inputHandler}
          className={emptyError.location ? "error" : null}
        />
        <ButtonGroup full>
          <Button className="form-btn" type="submit">
            Add
          </Button>
          <Button
            className="form-btn"
            variant="danger"
            type="reset"
            onClick={() => {
              setInput({ name: "", phone: "", location: "" });
              setEmptyError({ name: false, phone: false, location: false });
            }}
          >
            Reset
          </Button>
        </ButtonGroup>
      </form>
    </Container>
  );
};
export default UserForm;
