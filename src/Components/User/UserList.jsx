import UserItem from "./UserItem";
const UserList = ({ users, deleteHandler }) => {
  const userHandler = users.map((el) => (
    <UserItem deleteHandler={deleteHandler} key={el.id} user={el} />
  ));
  return (
    <>
      <table className="listing-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Location</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{userHandler}</tbody>
      </table>
    </>
  );
};
export default UserList;
