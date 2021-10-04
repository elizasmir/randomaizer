import { Fragment } from "react";
import { IUser } from "../App";
import "./../styles/UserCard.scss";

interface IUserCard {
  user: IUser | undefined;
}

const UserCard = (props: IUserCard) => {
  function renderRandomUsersData() {
    if (props.user) {
      return (
        <Fragment>
          <section className="user-avatar">
            <img alt="user avatar" src={props.user.avatar} />
          </section>
          <section className="user-data">
            <p>Hello! I'm</p>
            <span className="user-name">
              {props.user.firstName} {props.user.lastName}
            </span>
            <p>from</p>
            <span className="user-country">{props.user.country}</span>
          </section>
        </Fragment>
      );
    }
  }

  return (
    <section className="user-card">
      <p className="disclaimer">*Refresh the page to get a new user</p>
      {renderRandomUsersData()}
    </section>
  );
};

export default UserCard;
