// W state przechowamy wszystkie pobrane z API przedmioty
const initState = {
  isLogged: false
};

const loginReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGGED":
      return {...state, isLogged: action.isLogged};
    default:
      return state;
  }
};

export {loginReducer};