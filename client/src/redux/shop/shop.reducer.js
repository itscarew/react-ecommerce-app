const INIT_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const shopReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "FETCH_COLLECTIONS_START":
      return {
        ...state,
        isFetching: true
      };
    case "FETCH_COLLECTIONS_SUCCESS":
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      };
    case "FETCH_COLLECTIONS_FAILURE":
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      };

    default:
      return state;
  }
};

export default shopReducer;
