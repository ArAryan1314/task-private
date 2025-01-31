"use client";
import React, { useState } from "react";
import styles from "./addtask.module.scss";

const AddTask = ({ onAdd, setTask, tasks }) => {
  const [formData, setFormData] = useState({
    text: "",
    icon: "",
    project: "",
    time: "",
  });

  const HandleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // if (text) {
    //   const newText = {
    //     text: text,
    //     icon: icon,
    //     project: project,
    //     time: time,
    //   };
    //   setTask([...tasks, newText]);
    //   setText("");
    //   setIcon("");
    //   setProject("");
    //   setTime("");
    // }

    // onAdd({ text, icon, project, time });
  };

  return (
    <div>
      <form action="" className={styles.form_container} onSubmit={onSubmit}>
        <div className={styles.form_control}>
          <label htmlFor="">Task Name</label>
          <input
            type="text"
            name="text"
            placeholder="Task Name"
            value={formData.text}
            onChange={HandleChange}
          />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="">Task Icon</label>
          <input
            type="text"
            name="icon"
            placeholder="Task Icon"
            value={formData.icon}
            onChange={HandleChange}
          />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="">Task Project</label>
          <input
            type="text"
            name="project"
            placeholder="Task Project"
            value={formData.project}
            onChange={HandleChange}
          />
        </div>
        <div className={styles.form_control}>
          <label htmlFor="">Task Time</label>
          <input
            type="text"
            name="time"
            placeholder="Task Project"
            value={formData.time}
            onChange={HandleChange}
          />
        </div>
        <input type="submit" value="Save Task" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddTask;
