import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { roomList } from "../mock/reservations";
import styles from "../styles/index.module.scss";
import Link from "next/link";

const Contacts = () => {
  const [contactInfo, setContactInfo] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchContactInfo = () => {
      setContactInfo(roomList.map((room) => room.contact));
    };

    fetchContactInfo();
  }, []);

  const handleClick = () => {
    router.push("/"); 
  };

  return (
    <div className={styles.contactInfo}>
      <h1>Contacts Information</h1>
      {contactInfo.map((contact, index) => (
        <div key={index} className={styles.contactCard}>
          <h2>{contact.phone}</h2>
          <p>{contact.email}</p>
        </div>
      ))}
      <button onClick={handleClick}>Home</button>
      <Link href="/" passHref  onClick={handleClick}Home></Link>
    </div>
  );
};

export default Contacts;