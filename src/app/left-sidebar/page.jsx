import LeftLayout from "../components/left-one";
import styles from "./leftsidebar.module.scss";

const LeftSidebarLayout = () => {
  return (
    <div className={styles.left_sidebar}>
      <LeftLayout />
    </div>
  );
};

export default LeftSidebarLayout;
