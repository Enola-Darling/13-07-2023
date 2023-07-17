import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./index.module.scss";

const HeaderLayout = ({ children }) => {
  const router = useRouter();

  const links = [
    {
      id: 1,
      name: "Homepage",
      value: "/",
    },
    {
      id: 2,
      name: "locations",
      value: "/locations",
    },
    {
      id: 3,
      name: "contacts",
      value: "/contacts",
    },
    {
      id: 4,
      name: "👤Login",
      value: "/login",
    },
    {
      id: 5,
      name: "Dashboard",
      value: "/dashboard",
    },
  ];

  return (
    <div className={styles.DefaultLayout}>
      <div className={styles.navbar}>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.id}>
                <Link href={link.value}
                    className={
                      router.pathname === link.value ? styles.active : ""
                    }
                  >
                    {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <p>copyright 2023</p>
      </div>
    </div>
  );
};

export default HeaderLayout;
