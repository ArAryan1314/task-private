"use client";
import React, { useState } from "react";
import styles from "./task.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";

const TaskData = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Jogging",
      icon: <SiBookstack />,
      time: "06.00 - 07.30",
    },
    {
      id: 2,
      text: "Read a book",
      icon: <SiBookstack />,
      time: "08.00 - 09.00",
    },
    {
      id: 3,
      text: "Wireframing new product",
      icon: <SiBookstack />,
      time: "09.00 - 11.00",
    },
    {
      id: 4,
      text: "MoodBoad landing page",
      icon: <SiBookstack />,
      time: "11.00 - 13.00",
    },
  ]);

  const addTask = (tasks) => {
    console.log(tasks);
  };

  return (
    <div>
      <div className={styles.task_layout}>
        {tasks.map((taskMap) => (
          <div className={styles.inner_layout} key={taskMap.id}>
            <div className={styles.left}>
              <div className={styles.check}>
                <input type="checkbox" name="" id="" />
              </div>
              <div className={styles.text}> {taskMap.text}</div>
              <div className={styles.icon_mapped}> {taskMap.icon}</div>
            </div>

            <div className={styles.right}>
              <div className={styles.time}>
                <FaRegClock />
                {taskMap.time}
              </div>
              <div className={styles.add}>
                <BsThreeDotsVertical />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskData;
