import React from "react";

const Form1 = ({ formData, onNext, onhandleChange }) => {
  return (
    <div>
      <form className="text-center">
        <h1>This is Form 1</h1>
        <div>
          <input
            name="userName"
            type="text"
            value={formData.userName}
            placeholder="Enter your namne"
            onChange={(e) => {
              e.preventDefault();
              onhandleChange(e.target.name, e.target.value);
            }}
          />{" "}
          <hr />
          <input
            name="email"
            type="text"
            value={formData.email}
            placeholder="Enter your email"
            onChange={(e) => {
              e.preventDefault();
              onhandleChange(e.target.name, e.target.value);
            }}
          />{" "}
          <hr />
          <input
            name="age"
            type="text"
            value={formData.age}
            placeholder="Enter your age"
            onChange={(e) => {
              e.preventDefault();
              onhandleChange(e.target.name, e.target.value);
            }}
          />{" "}
          <hr />
        </div>
        <button className="btn-success" onClick={onNext}>
          Next
        </button>
      </form>
    </div>
  );
};

export default Form1;
