import React from "react";
import AuthorImage from "@/assets/author-300x300.png";
import styles from "./TheHeader.module.scss";

export const TheHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.image_container}>
        <img src={AuthorImage} alt="Author image" />
      </div>
      <div className={styles.contact_info}>
        <div className={styles.full_name_container}>
          <h1 id={styles.full_name}>Hovhannes Keshishyan</h1>
        </div>
        <div className={styles.current_job_block}>
          <h2 id={styles.current_job_title}>JavaScript Developer</h2>
        </div>
      </div>
    </header>
  );
};
