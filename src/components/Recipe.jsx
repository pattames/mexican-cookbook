import { useState, useEffect } from "react";
import styles from "./Recipe.module.css";
import { createClient } from "contentful";
import { useParams } from "react-router-dom";
import Error from "./Error";
import BrowseByCard from "./BrowseByCard";

export default function Recipe() {
  const { id } = useParams();
  const client = createClient({
    space: import.meta.env.VITE_SPACE,
    accessToken: import.meta.env.VITE_TOKEN,
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const item = await client.getEntry(id);
        setData(item);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [id]);

  const [ingredients, setIngredients] = useState(true);
  const [preparation, setPreparation] = useState(false);
  const iconItems = ["stockpot", "person", "update", "finance"];
  const aboutOptions = [
    "Preparation:",
    "Cooking time:",
    "Portions:",
    "Difficulty:",
  ];

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
  const imageUrl = data.fields
    ? `url(http:${data.fields.photo[0].fields.file.url})`
    : "url(/image22.png)";
  const heroStyle = {
    backgroundImage: imageUrl,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    overflow: "hidden",
    display: "fixed",
    height: "70rem",
    margin: "0",
  };
  const BrowseByStyle = {
    backgroundColor: "#86AD86",
  };
  return (
    <>
      <div className={styles.container}>
        <div style={heroStyle}></div>
        {!data.fields && (
          <div className={styles.container_recipe}>
            <div className={styles.left_recipe}>
              <Error message={"the data not be found!"} />
            </div>
          </div>
        )}
        {data.fields && (
          <div className={styles.container_recipe}>
            <div className={styles.left_recipe}>
              <h2>{data?.fields?.title}</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt perferendis deserunt iste molestiae modi repellendus
                cumque aut officiis dolorem!
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
                <ul>
                  {ingredients &&
                    data?.fields?.ingredients?.map((item, index) => {
                      return (
                        <li key={index}>
                          <span className="material-symbols-outlined">
                            check
                          </span>{" "}
                          {item}
                        </li>
                      );
                    })}
                  {preparation &&
                    data?.fields.instructions?.map((item, index) => {
                      return (
                        <li key={index}>
                          <span className="material-symbols-outlined">
                            arrow_forward
                          </span>{" "}
                          {item}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className={styles.right_recipe}>
              <h3>About the recipe</h3>
              <ul>
                {data &&
                  data?.fields?.about?.map((item, index) => {
                    return (
                      <li key={index}>
                        <span className="material-symbols-outlined">
                          {iconItems[index]}
                        </span>{" "}
                        {aboutOptions[index]}
                        {item}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
        )}
      </div>
      <BrowseByCard style={BrowseByStyle} />
    </>
  );
}
