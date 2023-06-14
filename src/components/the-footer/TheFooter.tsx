import React from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import styles from "./TheFooter.module.scss";
import { LinkedinIcon } from "../svg-icons/LinkedinIcon";
import { FacebookIcon } from "../svg-icons/FacebookIcon";
import { GitHubIcon } from "../svg-icons/GitHubIcon";

export const TheFooter: React.FC = () => {
  const social_medias = useTypedSelector(state => state.author.social);
  const icons: { [key: string]: React.FC } = {
    linkedin: LinkedinIcon,
    github: GitHubIcon,
    facebook: FacebookIcon,
  };

  return (
    <footer>
      <div className={styles.social_media}>
        {social_medias.map((social_media) => {
          const SocialIcon = icons[social_media.name];
          return (
            <a
              href={social_media.href}
              target="_blank"
              area-label={`${social_media.name} link`}
              key={social_media.name}
            >
              <SocialIcon />
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
