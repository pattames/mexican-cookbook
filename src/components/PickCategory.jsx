import { useState } from "react";
import BotanaCard from "./BotanaCard";
import styles from "./PickCategory.module.css";
import PlatillosCard from "./PlatillosCard";

export default function PickCategory() {
  //When button 1 -> Render "botanas" and hide "platillos"
  const [showBotanas, setShowBotanas] = useState(false);
  function handleBotanasButton() {
    setShowBotanas(true);
    setShowPlatillos(false);
  }

  //When button 2 -> Render "platillos" and hide "botanas"
  const [showPlatillos, setShowPlatillos] = useState(false);
  function handlePlatillosButton() {
    setShowPlatillos(true);
    setShowBotanas(false);
  }

  return (
    <div className={styles.pick_cat_container}>
      <h2>Pick a Category</h2>
      <div className={styles.buttons}>
        <button className={styles.button1} onClick={handleBotanasButton}>
          BOTANAS
        </button>
        <button className={styles.button2} onClick={handlePlatillosButton}>
          PLATILLOS PRINCIPALES
        </button>
      </div>
      <div className={styles.card_container}>
        {showBotanas && <BotanaCard />}
        {showPlatillos && <PlatillosCard />}
      </div>
    </div>
  );
}
