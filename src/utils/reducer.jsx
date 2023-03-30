function reducer(state, action) {
  switch (action.type) {
    case "initialLoad":
      return {
        ...state,
        ...action.payload,
      };
    case "searching":
      return {
        ...state,
        ...action.payload,
      };
    case "loading":
      return {
        ...state,
        ...action.payload,
      };
    case "incDataIndex":
      return {
        ...state,
        ...action.payload,
        dataIndex: state.dataIndex + 10,
      };
    default:
      return state;
  }
}

export default reducer;
