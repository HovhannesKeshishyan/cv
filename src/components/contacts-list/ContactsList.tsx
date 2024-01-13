import React from "react";
import styles from "./ContactsList.module.scss";
import { useTypedSelector } from "@/hooks/useTypedSelector";

export const ContactsList: React.FC = () => {
  const contacts = useTypedSelector((state) => state.author.contacts);

  return (
    <div className={styles.contacts}>
      <h2 className="app-section-title">Contacts</h2>
      <div className={styles.contact_item}>
        <span>E-mail</span>
        <a className={styles.email_href} href={`mailto:${contacts.email}`}>
          {contacts.email}
        </a>
      </div>
      <div className={styles.contact_item}>
        <span>Phone</span>
        <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
      </div>
      <div className={styles.contact_item}>
        <span>Address</span>
        <a href={contacts.address_google_map} target="_blank">
          {contacts.address}
        </a>
      </div>
    </div>
  );
};
