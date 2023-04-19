import { postUsers } from "../../../redux/actions/users.action";
import { UserForm } from "../UserForm/UserForms";

// TODO: Handler should be inside the component
const postHandler = (data: object) => {
  postUsers(data);
};

export const СreateUser = () => {
  return (
    <>
      <div className="createUser">
        <UserForm handler={postHandler} />
      </div>
    </>
  );
};
