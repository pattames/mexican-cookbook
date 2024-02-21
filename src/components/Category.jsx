//Banner (Patricio)
//PickCategory (Patricio) --> Card

import { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Category() {
  const recipes = useContext(DataContext);
  console.log("DATA:", recipes);

  return (
    <>
      {recipes.map((recipe) => (
        <h1>{recipe.fields.title}</h1>
      ))}
    </>
  );
}
