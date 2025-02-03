"use client";

import React, { useState } from "react";
import styles from "./rightsidebar.module.scss";
import RightHeader from "../components/right-one";
import BotttomTask from "../components/right-two";
import TaskData from "../components/right-three";
import AddTask from "../components/right-four";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiClock2 } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { SiBookstack } from "react-icons/si";

const RightSidebarLayout = () => {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Jogging",
      icon: <SiBookstack />,

      start: "06.00",
      end: "07.30",
      extra: "More ata",
    },
    // {
    //   id: 2,
    //   text: "Read a book",
    //   icon: <SiBookstack />,
    //   start: "06.00",
    //   end: "07.30",
    //   extra: "",
    // },
    // {
    //   id: 3,
    //   text: "Wireframing new product",
    //   icon: <SiBookstack />,
    //   start: "06.00",
    //   end: "07.30",
    //   extra: "",
    // },
    // {
    //   id: 4,
    //   text: "MoodBoad landing page",
    //   icon: <SiBookstack />,
    //   start: "06.00",
    //   end: "5.30",
    //   extra: "",
    // },
  ]);

  const [openForm, setOpenForm] = useState(false);

  const onClick = (e) => {
    setOpenForm((open) => !open);
    console.log("Clicked");
  };

  return (
    <div className={styles.right_sidebar}>
      {/* Row oNe Header */}
      <RightHeader />
      <TaskData tasks={tasks} setTask={setTask} />
      {/* Add Task Data */}
      {openForm && (
        <FormModal onClick={onClick} setTask={setTask} tasks={tasks} />
      )}

      <BotttomTask setTask={setTask} tasks={tasks} />
    </div>
  );
};

export default RightSidebarLayout;
