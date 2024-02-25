import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import styles from "./Card.module.css";

export default function BotanaCard() {
  const recipes = useContext(DataContext);
  console.log("DATA in BotanaCard:", recipes);

  const botanasRecipes = recipes.filter((recipe) =>
    recipe.fields.category.includes("Botanas")
  );
  console.log("Only botanas:", botanasRecipes);

  return (
    <>
      {botanasRecipes &&
        botanasRecipes.map((botanaRecipe) => (
          <div key={botanaRecipe.sys.id} className={styles.card}>
            <div className={styles.img_container}>
              <img
                src={botanaRecipe.fields.photo.map(
                  (photo) => photo.fields.file.url
                )}
                alt={botanaRecipe.fields.title}
              />
            </div>
            <div className={styles.card_data}>
              <h3>{botanaRecipe.fields.title}</h3>
              <div className={styles.middle_line}></div>
              <div className={styles.about_container}>
                <p>{botanaRecipe.fields.about[0]}</p>
                <p>{botanaRecipe.fields.about[2]}</p>
                <p>{botanaRecipe.fields.about[3]}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
