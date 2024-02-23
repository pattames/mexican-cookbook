import styles from "../components/Subscriptions.module.css"

export default function Subscriptions(){
    return (
        <div className={styles.container} >
            <div className={styles.subMessage}>
                <div className={styles.logo}>
                <img src="./logo.png" alt="logo" />
                </div>
                <div className={styles.message} >
                    <h3>Here we can write something about the company and display the logo next to it Here we can write something about the company and display the logo next to it</h3>
                </div>
            </div>

            <div className="styles.subForm" >
                <input type="email" placeholder="  @ Enter your email"/>
                <button>Subscribe</button>
            </div>
        </div>
    );
}