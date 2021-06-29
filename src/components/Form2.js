import React from "react";

const Form2 = ({ onNext, onBack, onhandleChange }) => {
  return (
    <div>
      <form className="text-center">
        <h1>This is Form 2</h1>
        <div>
          <input
            name="address"
            type="text"
            placeholder="Address"
            onChange={(e) => {
              onhandleChange(e.target.name, e.target.value);
            }}
          />{" "}
          <hr />
          <input
            name="userState"
            type="text"
            placeholder="State"
            onChange={(e) => {
              onhandleChange(e.target.name, e.target.value);
            }}
          />{" "}
          <hr />
          <input
            name="country"
            type="text"
            placeholder="Country"
            onChange={(e) => {
              onhandleChange(e.target.name, e.target.value);
            }}
          />{" "}
          <hr />
          <button className="btn-success" onClick={onBack} title="Back">
            Back
          </button>
          <button className="btn-success" onClick={onNext}>
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
