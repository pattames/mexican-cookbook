import styles from "../components/Subscriptions.module.css";

export default function Subscriptions() {
  return (
    <div className={styles.container}>
      <div className={styles.subMessage}>
        <div className={styles.logo}>
          <div className={styles.imgcont}>
            <img src="/public/logo2.png" className={styles.logo}></img>
          </div>
        </div>
        <div className={styles.message}>
          <h3 className={styles.textSub}>
            🌮 Want authentic Mexican recipes delivered straight to your inbox?
            Subscribe now for exclusive dishes, cooking tips, and special
            offers! Join our flavorful community today! 📧🎉
          </h3>
        </div>
      </div>

      <div className="styles.subForm">
        <input type="email" placeholder="  Please Enter your email..." />
        <button className={styles.subscribe_button}>Subscribe</button>
      </div>
    </div>
  );
}
