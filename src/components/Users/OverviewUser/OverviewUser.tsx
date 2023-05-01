import { useSelector } from "react-redux";
import {
  getUserById,
  updateUserById,
} from "../../../redux/actions/users.action";
import { usersSelector } from "../../../redux/selectors/users.selectors";
import { BackEndUserBanner } from "./Banners/BackEndUserBanner/BackEndUserBanner";
import { DesignerUserBanner } from "./Banners/DesignerUserBanner/DesignerUserBanner";
import { FrontEndUserBanner } from "./Banners/FrontEndUser/FrontEndUserBanner";
import { UserForm } from "../UserForm/UserForms";
import { ProfileUser } from "./constants";
import NotFoundCheck from "../NotFoundCheck";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// TODO: Add styles.
export const OverviewUser = () => {
  const { currentUser } = useSelector(usersSelector);
  const navigate = useNavigate();
  useEffect(() => {
    if (!currentUser) {
      navigate("/404");
    }
  }, [currentUser]);

  const getBannerComponent = {
    FrontEnd: <FrontEndUserBanner />,
    BackEnd: <BackEndUserBanner />,
    Designer: <DesignerUserBanner />,
  };

  const BannerComponent: React.FC = () =>
    getBannerComponent[currentUser.position as ProfileUser] ??
    "We couldn't find your position";

  return (
    <>
      {currentUser.position && <BannerComponent />}
      <UserForm {...currentUser} handler={updateUserById} />
    </>
  );
};

export const OverviewUserComponent = NotFoundCheck(
  OverviewUser,
  getUserById,
  "id"
);
