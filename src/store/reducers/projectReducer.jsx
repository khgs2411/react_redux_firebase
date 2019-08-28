const initState = {
  projects: [
    { id: "1", title: "First Title", content: "First Content" },
    { id: "2", title: "Second Title", content: "Second Content" },
    { id: "3", title: "Third Title", content: "Third Content" }
  ]
};
const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Created", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("Create project error", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
