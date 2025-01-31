import React from "react";
import Image from "next/image";
import styles from "./header.module.scss";

const RightHeader = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.left}>
          <div className={styles.heading}> Good Morning, Sullivan!</div>
          <div className={styles.desc}> Today, Wed 26 July 2023</div>
        </div>

        <div className={styles.right}>
          <div className={styles.today_box}>
            <Image
              src="/icon/angle-down.svg"
              alt="Home"
              className={styles.img}
              width={20}
              height={20}
            />{" "}
            Today
          </div>
          <div className={styles.more}>
            <Image
              src="/icon/grip-lines.svg"
              alt="Home"
              className={styles.img}
              width={20}
              height={20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightHeader;
