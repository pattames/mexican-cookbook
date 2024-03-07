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

export default function BotanaCard() {
  const recipes = useContext(DataContext);
  console.log("DATA in BotanaCard:", recipes);

  const botanasRecipes = recipes.filter((recipe) =>
    recipe.category.includes("Botanas")
  );
  console.log("Only botanas:", botanasRecipes);

  //Scrolls up to the top (The carousel was screwing that up)
  function ScrollToTopOnRender() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      {botanasRecipes &&
        botanasRecipes.map((botanaRecipe) => (
          <Link
            to={`/category/${botanaRecipe.id}`}
            style={{ textDecoration: "none" }}
          >
            <div
              key={botanaRecipe.id}
              className={styles.card}
              onClick={ScrollToTopOnRender}
            >
              <div className={styles.img_container}>
                <img src={botanaRecipe.photo} alt={botanaRecipe.title} />
              </div>
              <div className={styles.card_data}>
                <h3>{botanaRecipe.title}</h3>
                <div className={styles.middle_line}></div>
                <div className={styles.about_container}>
                  <p>
                    <FontAwesomeIcon icon={faClock} size="2x" />
                    {botanaRecipe.about[0]}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faBowlRice} size="2x" />
                    {botanaRecipe.about[2]}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faChartSimple} size="2x" />
                    {botanaRecipe.about[3]}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
    </>
  );
}
