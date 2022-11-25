import { useState } from "react";
import { Button, Container, LightBox } from "./Components/Layout";
import UserForm from "./Components/User/UserForm/UserForm";
import UserList from "./Components/User/UserList";
const App = () => {
  // Data States :
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Ali Shireef El-Zayat",
      phone: "01023433322",
      location: "Menia El-Qmh",
    },
    {
      id: 2,
      name: "Saif Shireef El-Zayat",
      phone: "01023433322",
      location: "Menia El-Qmh",
    },
    {
      id: 3,
      name: "Shireef Ali El-Zayat",
      phone: "01023433322",
      location: "Menia El-Qmh",
    },
  ]);
  const [toggleLightBox, setToggleLightBox] = useState(false);
  // Handlers :
  // Add User Handler :
  const handleAddUser = (data) => {
    data.id = users.length + 1;
    setUsers((prev) => [...prev, data]);
  };
  // Delete User handler :
  const deleteHandler = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };
  const closeLightBox = () => {
    setToggleLightBox(false);
  };
  return (
    <Container>
      <div
        className="w-100"
        style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}
      >
        <Button variant="primary" onClick={() => setToggleLightBox(true)}>
          Add
        </Button>
      </div>
      {toggleLightBox ? (
        <LightBox closeLightBox={closeLightBox}>
          <UserForm
            handleAddUser={handleAddUser}
            closeLightBox={closeLightBox}
          />
        </LightBox>
      ) : null}
      <UserList users={users} deleteHandler={deleteHandler} />
    </Container>
  );
};
export default App;
