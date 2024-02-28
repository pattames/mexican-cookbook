import styles from "./HeroCategory.module.css";

export default function HeroCategory() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2 className={styles.subheading}>Pick of Week</h2>
        <h1 className={styles.heading}> UNFORGETTABLE HOT SPICY TACOS</h1>
        <p className={styles.text}>
          Find out how to prepare and eat some delicious tacos, we are sure you
          won't regret it
        </p>
        <button className={styles.btn}> View Recipe </button>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}
