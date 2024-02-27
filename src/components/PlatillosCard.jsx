import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faClock,
  faBowlRice,
} from "@fortawesome/free-solid-svg-icons";

export default function PlatillosCard() {
  const recipes = useContext(DataContext);
  console.log("DATA in platillosCard:", recipes);

  const platillosRecipes = recipes.filter((recipe) =>
    recipe.fields.category.includes("Platillos")
  );
  console.log("Only platillos:", platillosRecipes);

  //Scrolls up to the top (The carousel was screwing that up)
  function ScrollToTopOnRender() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      {platillosRecipes &&
        platillosRecipes.map((platilloRecipe) => (
          <Link
            to={`/category/${platilloRecipe.sys.id}`}
            style={{ textDecoration: "none" }}
            onClick={ScrollToTopOnRender}
          >
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
                  <p>
                    <FontAwesomeIcon icon={faClock} size="2x" />
                    {platilloRecipe.fields.about[0]}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faBowlRice} size="2x" />
                    {platilloRecipe.fields.about[2]}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faChartSimple} size="2x" />
                    {platilloRecipe.fields.about[3]}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}
