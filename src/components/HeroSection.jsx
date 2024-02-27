import styles from "./HeroSection.module.css";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.leftside}>
        <div className={styles.horizontal_line}></div>
        <h1 className={styles.heading}>
          Come find out all our delicious recipes, save your money & cook at
          home
        </h1>
        <Link to="/category">
          <button className={styles.button_hero}>Let's cook!</button>
        </Link>
      </div>
      <div className={styles.rightside}>
        <div className={styles.green_rectangle}>
          <div
            className={`${styles.image_hero_up} ${styles.slideInLeft}`}
            id={styles.pic1}
          ></div>
          <div className={styles.image_hero_up} id={styles.pic2}></div>
          <div className={styles.image_hero} id={styles.pic3}></div>
          <div className={styles.image_hero} id={styles.pic4}></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
