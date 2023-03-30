import { useEffect } from "react";

function useDebounceSearch(query, state, dispatch) {
  useEffect(() => {
    dispatch({
      type: "searching",
      payload: { loading: true, filteredData: [] },
    });
    const handler = setTimeout(() => {
      let filterData = state.data.filter((item) => {
        return (
          item["name"].toLowerCase().includes(query.toLowerCase()) ||
          item["alt_name"].toLowerCase().includes(query.toLowerCase())
        );
      });
      dispatch({
        type: "searching",
        payload: { loading: false, filteredData: filterData, dataIndex: 20 },
      });
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);
}

export default useDebounceSearch;
