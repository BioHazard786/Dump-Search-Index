import { useEffect } from "react";
import { Deta } from "deta";

function useFetchData(dispatch, telegram) {
  telegram.ready();
  const deta = Deta(import.meta.env.VITE_DETA_KEY);
  const index = deta.Base("INDEX");

  const fetchData = async () => {
    let result = await index.fetch();
    let allItems = result.items;
    while (result.last) {
      result = await index.fetch({}, { last: result.last });
      allItems = allItems.concat(result.items);
    }
    allItems.sort((a, b) => {
      return a.index - b.index;
    });
    dispatch({
      type: "initialLoad",
      payload: { data: allItems, filteredData: allItems },
    });
  };

  useEffect(() => {
    fetchData();
  }, []);
}

export default useFetchData;
