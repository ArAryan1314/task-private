"use client";
import React from "react";
import styles from "./button.module.scss";

const ClickButton = ({ text, textcolor, bgcolor, onClick }) => {
  return (
    <div className={styles.btn_one}>
      <button
        onClick={onClick}
        style={{
          backgroundColor: "black",
          color: "white",
          border: 0,
          fontFamily: "inherit",
          fontSize: 18,
          cursor: "pointer",
        }}
        className="btn"
      >
        {text}
      </button>
    </div>
  );
};

export default ClickButton;
