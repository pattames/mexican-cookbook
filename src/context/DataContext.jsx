import { createContext } from "react";
import { useState, useEffect } from "react";
import { createClient } from "contentful";

export const DataContext = createContext();

export default function DataContextProvider(props) {
  const client = createClient({
    space: "lwwf0cid7sw8",
    accessToken: "cL9_mKEg6c404st4M1HOIjuWmo0tsQDmylIfTNIPf2A",
  });

  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const entryItems = await client.getEntries();
        console.log("FETCH:", entryItems.items);
        setData(entryItems.items);
      } catch (eror) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
}
