import React from "react";
import PropTypes from "prop-types";

// import defaultAvatar from "../../images/cover.jpeg";
// import '../stylesheets/Profile.css';

function Profile(props) {
  const avatar = props.avatar === "" ? props.imageProfile : props.avatar;
  return (
    <div
      className={props.className}
      style={{ backgroundImage: `url(${avatar})` }}
    ></div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;
