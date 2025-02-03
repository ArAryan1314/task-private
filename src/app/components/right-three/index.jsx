"use client";
import React, { useState } from "react";
import styles from "./task.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";

const TaskData = ({ tasks, setTask }) => {
  const [boxOpen, setBoxOpen] = useState(null);

  //Delete Task
  const DeleteTask = (id) => {
    setTask(tasks.filter((tasks) => tasks.id !== id));
  };

  const clickOpen = (id) => {
    setBoxOpen(boxOpen === id ? null : id);
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
              <div className={styles.trending}># {taskMap.extra}</div>
            </div>

            <div className={styles.right}>
              <div className={styles.time}>
                <FaRegClock />
                {taskMap.start} - {taskMap.end}
              </div>
              <div className={styles.add} onClick={() => clickOpen(taskMap.id)}>
                <BsThreeDotsVertical />
                {boxOpen === taskMap.id && (
                  <div className={styles.popup}>
                    <div className={styles.edit}>Edit</div>
                    <div
                      className={styles.delete}
                      onClick={() => DeleteTask(taskMap.id)}
                    >
                      Delete
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskData;
