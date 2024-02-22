import { useContext } from "react";
import { DataContext } from "../context/DataContext";

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
          <div key={botanaRecipe.sys.id}>
            <img
              src={botanaRecipe.fields.photo.map(
                (photo) => photo.fields.file.url
              )}
              alt={botanaRecipe.fields.title}
              width={200}
            />
            <h3>{botanaRecipe.fields.title}</h3>
            <div>
              {botanaRecipe.fields.about[0]}
              {botanaRecipe.fields.about[2]}
              {botanaRecipe.fields.about[3]}
            </div>
          </div>
        ))}
    </>
  );
}
