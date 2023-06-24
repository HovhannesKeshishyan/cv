import React from "react";
import AuthorImagePNG from "@/assets/author/png/author-300x300.png";
import AuthorImageWebP300 from "@/assets/author/webp/author-300x300.webp";
import AuthorImageWebP225 from "@/assets/author/webp/author-225x225.webp";
import styles from "./TheHeader.module.scss";

export const TheHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.image_container}>
        <picture>
          <source
            media="(max-width: 720px)"
            srcSet={AuthorImageWebP225}
            type="image/webp"
          />
          <source
            media="(min-width: 720px)"
            srcSet={AuthorImageWebP300}
            type="image/webp"
          />
          <source srcSet={AuthorImagePNG} type="image/png" />
          <img src={AuthorImagePNG} alt="Author image" />
        </picture>

        {/* <img src={AuthorImagePNG} alt="Author image" /> */}
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
