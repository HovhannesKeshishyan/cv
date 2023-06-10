import React from "react";
import AuthorImagePNG from "@/assets/author-300x300.png";
import AuthorImageWebP from "@/assets/author-300x300.webp";
import AuthorImageWebPSmall from "@/assets/author-150x150.webp";
import styles from "./TheHeader.module.scss";

export const TheHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.image_container}>
        <picture>
          <source
            media="(max-width: 720px)"
            srcSet={AuthorImageWebPSmall}
            type="image/webp"
          />
          <source
            media="(min-width: 720px)"
            srcSet={AuthorImageWebP}
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
