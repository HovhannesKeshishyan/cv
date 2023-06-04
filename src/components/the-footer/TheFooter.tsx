import React from "react";
import styles from "./TheFooter.module.scss";
import LinkedinIcon from "@/assets/icons/social-media/linkedin.png";
import FacebookIcon from "@/assets/icons/social-media/facebook.png";

export const TheFooter: React.FC = () => {
  const social_media_data = [
    {
      name: "linkedin",
      href: "https://www.linkedin.com/in/hovhannes-keshishyan",
      img_src: LinkedinIcon,
      alt_text: "Linkedin icon",
    },
    {
      name: "facebook",
      href: "https://www.facebook.com/HovoKeshishyan",
      img_src: FacebookIcon,
      alt_text: "Facebook icon",
    },
  ];
  return (
    <footer>
      <div className={styles.social_media}>
        {social_media_data.map((social_media) => {
          return (
            <a href={social_media.href} target="_blank" key={social_media.name}>
              <img src={social_media.img_src} alt={social_media.alt_text} />
            </a>
          );
        })}
      </div>

      <div className={styles.copyrighting}>
        <span>©</span>
        <span className={styles.current_year}>{new Date().getFullYear()}</span>
      </div>
    </footer>
  );
};
