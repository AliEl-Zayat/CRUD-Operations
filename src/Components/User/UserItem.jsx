import { Button, ButtonGroup } from "../Layout";

const UserItem = ({ user, deleteHandler }) => {
  return (
    <>
      <tr className="user-row">
        <td className="user-id">{user.id}</td>
        <td className="user-name">{user.name}</td>
        <td className="user-phone">{user.phone}</td>
        <td className="user-location">{user.location}</td>
        <td>
          <ButtonGroup>
            <Button variant="primary">Edit</Button>
            <Button variant="danger" onClick={() => deleteHandler(user.id)}>
              Delete
            </Button>
          </ButtonGroup>
        </td>
      </tr>
    </>
  );
};
export default UserItem;
