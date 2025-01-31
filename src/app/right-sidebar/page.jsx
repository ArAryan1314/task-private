import React from "react";
import styles from "./rightsidebar.module.scss";
import RightHeader from "../components/right-one";
import BotttomTask from "../components/right-two";
import TaskData from "../components/right-three";
import AddTask from "../components/right-four";

const RightSidebarLayout = ({ openForm }) => {
  return (
    <div className={styles.right_sidebar}>
      {/* Row oNe Header */}
      <RightHeader />

      <TaskData />

      {/* Add Task Data */}
      {openForm && <AddTask />}

      <BotttomTask />

      {/*
      <TaskData />

      <RightTask /> */}
    </div>
  );
};

export default RightSidebarLayout;
