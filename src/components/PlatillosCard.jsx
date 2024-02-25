import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import styles from "./Card.module.css";

export default function PlatillosCard() {
  const recipes = useContext(DataContext);
  console.log("DATA in platillosCard:", recipes);

  const platillosRecipes = recipes.filter((recipe) =>
    recipe.fields.category.includes("Platillos")
  );
  console.log("Only platillos:", platillosRecipes);

  return (
    <>
      {platillosRecipes &&
        platillosRecipes.map((platilloRecipe) => (
          <div key={platilloRecipe.sys.id} className={styles.card}>
            <div className={styles.img_container}>
              <img
                src={platilloRecipe.fields.photo.map(
                  (photo) => photo.fields.file.url
                )}
                alt={platilloRecipe.fields.title}
              />
            </div>
            <div className={styles.card_data}>
              <h3>{platilloRecipe.fields.title}</h3>
              <div className={styles.middle_line}></div>
              <div className={styles.about_container}>
                <p>{platilloRecipe.fields.about[0]}</p>
                <p>{platilloRecipe.fields.about[2]}</p>
                <p>{platilloRecipe.fields.about[3]}</p>
              </div>
            </div>
          </div>
        ))}
    </>
  );
}
