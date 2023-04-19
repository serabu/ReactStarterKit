import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { deleteUser, fetchUsers } from "../../../redux/actions/users.action";
import { usersSelector } from "../../../redux/selectors/users.selectors";
import "./UsersList.scss";
import { useAppDispatch } from "../../../redux/state/state";
import { Link } from "react-router-dom";

export const UsersList = () => {
  const { users, error, loading } = useSelector(usersSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      <Table striped bordered hover className="usersList">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((item, i) => (
              <tr key={`userlist__item_${i}`}> 
                <td>{i + 1} </td>
                <td>{item.first_name}</td>
                <td>{item.second_name} </td>
                <td>{item.age} </td>
                <td>{item.email} </td>
                <td>{item.position} </td>
                <td>
                  <button
                    key={`userlist__button_${i}`}
                    onClick={() => deleteUser(item)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                <Link  to={`/user?id=${item.id}`}>
                  Edit
                </Link>             
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};
