import { getNodeText } from "@testing-library/react";
import React from "react";

const Form3 = ({ onNext, onBack, onhandleChange }) => {
  return (
    <div>
      <form className="text-center">
        <h1>This is Form 3</h1>
        <div>
          <input
            name="bio"
            type="text"
            placeholder="Enter your Bio"
            onChange={(e) => {
              onhandleChange(e.target.name, e.target.value);
            }}
          />{" "}
          <hr />
          <input
            name="profession"
            type="text"
            placeholder="Enter your Profession"
            onChange={(e) => {
              onhandleChange(e.target.name, e.target.value);
            }}
          />{" "}
          <hr />
          <input
            name="hobby"
            type="text"
            placeholder="Enter your Hobby"
            onChange={(e) => {
              onhandleChange(e.target.name, e.target.value);
            }}
          />{" "}
          <hr />
          <button
            className="btn-success"
            onClick={onBack}
            title="Back"
            onChange={() => {
              onBack();
            }}
          >
            Back
          </button>
          <button className="btn-success" onClick={onNext}>
            Show
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form3;
