import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links_container}>
        <ul className={styles.navlist}>
          <div className={styles.navItem}>
            <a href="/" className={styles.navlinks}>
              HOME
            </a>
          </div>
          <div className={styles.navItem}>
            <a href="/category" className={styles.navlinks}>
              CATEGORIES
            </a>
          </div>
          <div className={styles.navItem}>
            <a href="" className={styles.navlinks}>
              ABOUT US
            </a>
          </div>
          <div className={styles.navItem}></div>
        </ul>
      </div>
      <img src="/public/logo2.png" className={styles.navbarlogo}></img>
    </div>
  );
}
