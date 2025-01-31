import React from "react";
import styles from "./sidebar.module.scss";
import LeftSidebarLayout from "../left-sidebar/page";
import RightSidebarLayout from "../right-sidebar/page";

const Sidebar = () => {
  return (
    <div className={styles.sidebar_layout}>
      <LeftSidebarLayout />
      <RightSidebarLayout />
    </div>
  );
};

export default Sidebar;
