import { createContext } from "react";
import { useState, useEffect } from "react";
import { createClient } from "contentful";

export const DataContext = createContext();

export default function DataContextProvider(props) {
  const client = createClient({
    space: import.meta.env.VITE_SPACE,
    accessToken: import.meta.env.VITE_TOKEN,
  });

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const entryItems = await client.getEntries();
        setData(entryItems.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
}
