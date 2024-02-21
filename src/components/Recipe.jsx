import { useState } from "react";
import styles from "./Recipe.module.css";

export default function Recipe() {
  const [ingredients, setIngredients] = useState(true);
  const [preparation, setPreparation] = useState(false);

  function handledPreparation() {
    if (preparation) return;
    setPreparation(!preparation);
    setIngredients(!ingredients);
  }
  function handledIngredients() {
    if (ingredients) return;
    setIngredients(!ingredients);
    setPreparation(!preparation);
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.hero_recipe}></div>
        <div className={styles.container_recipe}>
          <div className={styles.left_recipe}>
            <h2>Cilantro avocado salad</h2>
            <p>
              what so ever text is here what so ever text is here what so ever
              text is here what so ever text is here
            </p>
            <div className={styles.left_recipe_categories}>
              <button
                className={
                  ingredients
                    ? styles.left_recipe_btn_active
                    : styles.left_recipe_btn
                }
                onClick={handledIngredients}
              >
                Ingredients
              </button>
              <button
                className={
                  preparation
                    ? styles.left_recipe_btn_active
                    : styles.left_recipe_btn
                }
                onClick={handledPreparation}
              >
                Preparation
              </button>
            </div>
            <div className={styles.left_recipe_desc}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                sit soluta tempore repellat alias deserunt vitae praesentium
                pariatur ad necessitatibus esse animi quam nesciunt consequatur
                nihil vel earum, iusto eaque.
              </p>
            </div>
          </div>
          <div className={styles.right_recipe}>
            <h3>About the recipe</h3>
            <ul>
              <li>
                <span className="material-symbols-outlined">stockpot</span>
                Preparation: 15 min
              </li>
              <li>
                <span className="material-symbols-outlined">person</span>
                Portions: 2 servings
              </li>
              <li className="icons">
                <span className="material-symbols-outlined">update</span>{" "}
                Cooking time: 10 min
              </li>
              <li>
                <span className="material-symbols-outlined">finance</span>{" "}
                Difficulty: easy
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
