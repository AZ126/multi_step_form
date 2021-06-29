import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Show = ({ formData }) => {
  const {
    userName,
    email,
    age,
    address,
    userState,
    country,
    bio,
    profession,
    hobby,
  } = formData;
  return (
    <div>
      <h1>{Show}</h1>
      <h1> userName:{userName}</h1>
      <h2> email:{email}</h2>
      <h3> age:{age}</h3>
      <h4> address:{address}</h4>
      <h5> userState:{userState}</h5>
      <h6> country:{country}</h6>
      <p> bio:{bio}</p>
      <p> profession:{profession}</p>
      <p> hobby:{hobby}</p>
    </div>
  );
};

Show.propTypes = {};

export default Show;
