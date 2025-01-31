import React from "react";
import styles from "./leftone.module.scss";
import Image from "next/image";
import Link from "next/link";

const LeftLayout = () => {
  return (
    <div>
      <div className={styles.row_one}>
        <div className={styles.heading}>Private</div>

        <div className={styles.icon}>
          <Image
            src="/icon/icon.svg"
            alt="Shring And grow SideBar"
            className={styles.img}
            width={15}
            height={15}
          />
        </div>
      </div>

      {/* Row Two List */}
      <div className={`${styles.row_two} ${styles.vscroll} `}>
        <Link href="/" className={styles.link_text}>
          <div className={styles.left}>
            <Image
              src="/icon/home.svg"
              alt="Home"
              className={styles.img}
              width={20}
              height={20}
            />{" "}
            Home
          </div>
          <div className={styles.right}>8</div>
        </Link>
        <Link href="/" className={styles.link_text}>
          <div className={styles.left}>
            <Image
              src="/icon/square.svg"
              alt="Home"
              className={styles.img}
              width={20}
              height={20}
            />{" "}
            Completed
          </div>
          <div className={styles.right}>16</div>
        </Link>
        <Link href="/" className={styles.link_text}>
          <div className={styles.left}>
            <Image
              src="/icon/square.svg"
              alt="Home"
              className={styles.img}
              width={20}
              height={20}
            />{" "}
            Personal
          </div>
          <div className={styles.right}>4</div>
        </Link>
        <Link href="/" className={styles.link_text}>
          <div className={styles.left}>
            <Image
              src="/icon/square.svg"
              alt="Home"
              className={styles.img}
              width={20}
              height={20}
            />{" "}
            Work
          </div>
          <div className={styles.right}>6</div>
        </Link>
        <Link href="/" className={styles.link_text}>
          <div className={styles.left}>
            <Image
              src="/icon/muscle.svg"
              alt="Home"
              className={styles.img}
              width={20}
              height={20}
            />{" "}
            Diet
          </div>
          <div className={styles.right}>3</div>
        </Link>
        <Link href="/" className={styles.link_text}>
          <div className={styles.left}>
            <Image
              src="/icon/books.svg"
              alt="Home"
              className={styles.img}
              width={20}
              height={20}
            />{" "}
            List of Books
          </div>
          <div className={styles.right}>8</div>
        </Link>
        <Link href="/" className={styles.link_text}>
          <div className={styles.left}>
            <Image
              src="/icon/car-side.svg"
              alt="Home"
              className={styles.img}
              width={20}
              height={20}
            />{" "}
            Road Trip list
          </div>
          <div className={styles.right}>6</div>
        </Link>
      </div>
      {/* Row Three List */}

      <div className={styles.row_three}>
        <div className={styles.left}>
          <Image
            src="/icon/plus.svg"
            alt="Home"
            className={styles.img_one}
            width={20}
            height={20}
          />
          Create new List
        </div>
        <div className={styles.right}>
          <Image
            src="/icon/command.svg"
            alt="Home"
            className={styles.img_one}
            width={20}
            height={20}
          />
          <Image
            src="/icon/circle-l.svg"
            alt="Home"
            className={styles.img_two}
            width={20}
            height={20}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftLayout;
