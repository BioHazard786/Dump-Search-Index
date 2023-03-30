function nextBatchLoad(dispatch) {
  const timer = setTimeout(() => {
    dispatch({
      type: "incDataIndex",
      payload: { loading: false },
    });
  }, 300);
}

export default nextBatchLoad;
