import styles from "./HeroCategory.module.css";

export default function HeroCategory() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h2>Pick of Week</h2>
        <h1> UNFORGETTABLE HOT SPICY TACOS</h1>
        <p>
          Find out how to prepare and eat some delicious tacos, we are sure you
          won't regret it
        </p>
        <button> View Recipe </button>
      </div>
      <div className={styles.right}></div>
    </div>
  );
}
