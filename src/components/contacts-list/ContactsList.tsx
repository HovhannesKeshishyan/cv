import React from "react";
import styles from "./ContactsList.module.scss";

export const ContactsList: React.FC = () => {
  return (
    <div className={styles.contacts}>
      <h2 className="app-section-title">Contacts</h2>
      <div className={styles.contact_item}>
        <span>E-mail</span>
        <a className={styles.email_href} href="mailto:hovhanneskeshishyan@gmail.com">
          hovhanneskeshishyan@gmail.com
        </a>
      </div>
      <div className={styles.contact_item}>
        <span>Phone</span>
        <a href="tel:+37498088092">098-08-80-92</a>
      </div>
      <div className={styles.contact_item}>
        <span>Address</span>
        <a href="https://goo.gl/maps/HK46jouRBXPehNY18" target="_blank">
          Abovyan city, Armenia
        </a>
      </div>
    </div>
  );
};
