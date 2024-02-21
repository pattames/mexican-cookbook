import styles from "./CategorySection.module.css";

export default function CategorySection() {
  return (
    <>
      <h2> Browse by Recipes</h2>
      <div className={styles.categoryContainer}>
        <a href="">
          <div className={styles.category} id={styles.category1}></div>
          <div className={styles.line}>Botanas </div>
        </a>

        <a href="">
          <div className={styles.category} id={styles.category2}></div>
          <div className={styles.line}> Platillos Principales</div>
        </a>
      </div>
    </>
  );
}
