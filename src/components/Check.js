import React from "react";
import PropTypes from "prop-types";

const Check = (props) => {
  return (
    <div>
      <h1>Hello,</h1>
      <h1>
        {" "}
        <Checking name="tanisha" age={7} />{" "}
      </h1>
    </div>
  );
};

const Checking = (props) => {
  return (
    <h1>
      I am {props.name} {props.age}{" "}
    </h1>
  );
};
Check.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
};
export default Check;
