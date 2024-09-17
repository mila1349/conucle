import React from "react";

function ButtonArrow({ left, color, disabled, onClick }) {
  return (
    <button
      className="button-arrow"
      style={{
        background: color === "green" ? "#15C363" : "#FFF",
        opacity: disabled ? 0.5 : 1,
        cursor: !disabled ? "pointer" : "default",
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {left ? (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.8044 8.05708L3.47247 8.21997"
            stroke={color === "green" ? "white" : "#15C363"}
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.21984 12.8044L3.47244 8.21991L8.05695 3.47251"
            stroke={color === "green" ? "white" : "#15C363"}
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ) : (
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.74923 8.05708L13.0811 8.21997"
            stroke={color === "white" ? "#15C363" : "white"}
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.33375 12.8044L13.0812 8.21991L8.49664 3.47251"
            stroke={color === "white" ? "#15C363" : "white"}
            stroke-width="1.33333"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      )}
    </button>
  );
}

export default ButtonArrow;
