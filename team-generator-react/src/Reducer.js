import initial from "./initial";

const addPlayer = (state, action) => ({
     ...state,
     players: [...state.players, action.players],
});

const clearList = () => ({
     ...initial,
});

const reducer = (state, action) => {
     switch (action.type) {
          case "addPlayer": return addPlayer(state, action);
          case "clearList": return clearList();
          default: return state;
     }
};

export default reducer;