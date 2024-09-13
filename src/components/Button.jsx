import React from "react";

function Button({ text }) {
  return (
    <a className="button-secondary">
      <p>{text}</p>
      <div className="btn-wrapper">
        <img src="assets/arrow.png" alt="" />
      </div>
    </a>
  );
}

export default Button;
