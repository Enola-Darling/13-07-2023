import { useState, useEffect } from "react";
import { roomList } from "../mock/reservations";
import styles from "../styles/index.module.scss";
import Link from "next/link";


export default function Contacts() {
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    const fetchContactInfo = () => {
      setContactInfo(roomList.map((room) => room.contact));
    };

    fetchContactInfo();
  }, []);

  return (
    <div className={styles.contactInfo}>
      <h1>Contacts Information</h1>
      {contactInfo.map((contact, index) => (
        <div key={index} className={styles.contactCard}>
          <h2>{contact.phone}</h2>
          <p>{contact.email}</p>
        </div>
      ))}
       <Link href="/index"></Link>
          <button>
            Home
          </button>
    </div>
  );
}