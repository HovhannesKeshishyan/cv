import {FC} from "react";
import AuthorImagePNG from "@/assets/author/png/author-300x300.png";
import AuthorImageWebP300 from "@/assets/author/webp/author-300x300.webp";
import AuthorImageWebP225 from "@/assets/author/webp/author-225x225.webp";
import styles from "./TheHeader.module.scss";

export const TheHeader: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.imageContainer}>
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
      </div>
      <div>
        <div>
          <h1>Hovhannes Keshishyan</h1>
        </div>
        <div className={styles.currentJobBlock}>
          <h2>JavaScript Developer</h2>
        </div>
      </div>
    </header>
  );
};
