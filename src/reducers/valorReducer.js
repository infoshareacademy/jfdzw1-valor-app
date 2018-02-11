// W state przechowamy wszystkie pobrane z API przedmioty
const initState = {
  pending: false,
  hasError: false,
  items: []
};

const valorReducer = (state = initState, action) => {
  switch (action.type) {
    case "PENDING":
      return {...state, pending: true};
    case "ERROR":
      return {...state, hasError: true, pending: false};
    case "SUCCESS":
      return {...state, pending: false, items: action};
    default:
      return state;
  }
};

export {valorReducer};