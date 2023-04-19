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
    // TODO: change name of firlds and use enum like [ProfileUser.Front_End]
    FrontEnd: <FrontEndUserBanner />,
    BackEnd: <BackEndUserBanner />,
    Designer: <DesignerUserBanner />,
  };

  // TODO: Fix issue with undefined of position
  const BannerComponent: React.FC = () => 
    getBannerComponent[currentUser.position as ProfileUser]?? "We couldn't find your position";

  return (
    <>
    // TODO: you don't need this check
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
