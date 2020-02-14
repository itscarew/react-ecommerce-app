import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export const FetchCollectionsStart = () => ({
  type: "FETCH_COLLECTIONS_START"
});

export const FetchCollectionsSuccess = collectionsMap => ({
  type: "FETCH_COLLECTIONS_SUCCESS",
  payload: collectionsMap
});

export const FetchCollectionsFailure = errorMessage => ({
  type: "FETCH_COLLECTIONS_START",
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection("collections");
    dispatch(FetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(FetchCollectionsSuccess(collectionsMap));
      })
      .catch(err => {
        dispatch(FetchCollectionsFailure(err.message));
      });
  };
};
