import { useEffect } from "react";
import nextBatchLoad from "../utils/nextBatchLoad";

function useIntersectionObserver(state, dispatch, triggerRef, isLast) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          if (state.dataIndex < state.filteredData.length) {
            dispatch({ type: "loading", payload: { loading: true } });
            nextBatchLoad(dispatch);
          }
        }
      },
      { threshold: 0.9 }
    );
    if (triggerRef && triggerRef.current && isLast) {
      observer.observe(triggerRef.current);
    }
  }, []);
}

export default useIntersectionObserver;
