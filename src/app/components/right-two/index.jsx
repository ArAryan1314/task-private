"use client";
import { useState } from "react";
import Image from "next/image"; // Correct import
import { FaPlus } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import styles from "./bottom-task.module.scss";
import Form from "../right-four";

const BotttomTask = ({ setTask, tasks }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const clickToOpen = () => {
    setIsFormOpen((addformAryan) => !addformAryan);
  };

  return (
    <div>
      <div className={styles.add_task}>
        <div className={styles.add_title} onClick={clickToOpen}>
          <FaPlus />
          Create new Task
        </div>
        <div className={styles.icons}>
          <div className={styles.command_icon}>
            <Image
              src="/icon/cmd.png"
              alt="command icon"
              width={20}
              height={20}
            />
          </div>
          <div className={styles.command_ico}>N</div>
        </div>
      </div>
      <div className={styles.last_icon}>
        <FaRegFileLines />
      </div>
      {isFormOpen && (
        <div className={styles.form}>
          <Form setTask={setTask} tasks={tasks} setIsFormOpen={setIsFormOpen} />
        </div>
      )}
    </div>
  );
};

export default BotttomTask;
