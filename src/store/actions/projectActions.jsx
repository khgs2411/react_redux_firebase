export const createProjAction = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // async database call
    const firestore = getFirestore();
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Liad",
        authorLastName: "Goren",
        authorId: 7526,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
  };
};
