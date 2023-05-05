import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <a className="profile-card-container" href={props.props.profileUrl} role="button">
      <img className="profile-card-img" src={props.props.imgUrl} alt={props.props.title}/>
      <h6 className="profile-title">{props.props.title}</h6>
      </a>
  );
}

export default ProfileCard;
