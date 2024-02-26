import styles from "./CategorySection.module.css";

export default function CategorySection() {
  return (
    <>
      <div className={styles.heading}>
        <h2> Browse by Category</h2>
      </div>
      <div className={styles.categoryContainer}>
        <a href="/category" className={styles.link}>
          <div className={styles.categoryWrapper}>
            <div className={styles.category} id={styles.category1}></div>
            <div className={styles.line}></div>
            <div className={styles.name}> Botanas</div>
          </div>
        </a>

        <a href="/category" className={styles.link}>
          <div className={styles.categoryWrapper}>
            <div className={styles.category} id={styles.category2}></div>
            <div className={styles.line}></div>
            <div className={styles.name}> Platillos Principales</div>
          </div>
        </a>
      </div>
    </>
  );
}
