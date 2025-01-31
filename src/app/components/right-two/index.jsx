"use client";
import React, { useState } from "react";
import styles from "./bottom-task.module.scss";
import Image from "next/image";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { MdKeyboardCommandKey, MdLocalParking } from "react-icons/md";
import ClickButton from "../button";

const BotttomTask = () => {
  const [openForm, setOpenForm] = useState(false);

  const onClick = (e) => {
    setOpenForm((open) => !open);

    console.log("Clicked");
  };

  return (
    <div className={styles.right_task_wrapper}>
      <div className={styles.row_one}>
        <div className={styles.left}>
          <FaPlus />
          <ClickButton text="Create a new task data" onClick={onClick} />
        </div>
        <div className={styles.right}>
          <div className={styles.command}>
            <MdKeyboardCommandKey />
          </div>

          <div className={styles.letter}>
            <MdLocalParking />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BotttomTask;
