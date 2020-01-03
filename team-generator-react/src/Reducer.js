import initial from "./initial";

const addPlayer = (state, action) => ({
     ...state,
     players: [...state.players, action.players],
});

const clearList = () => ({
     ...initial,
});

function shuffle(arr) {
     for (let i = arr.length - 1; i > 0; i-=1) {
          let j = Math.floor(Math.random() * (i + 1)); 
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp; 
     }
     return arr;     
};

const generateTeams = (state) => ({
     ...state,
     players: shuffle(state.players),
     teamA: state.players.slice(0, (state.players.length / 2)),
     teamB: state.players.slice((state.players.length / 2), state.players.length),
     submitted: true,
});

function removeLastItem(arr) {
     arr.pop();
     return arr;
};

const deletePlayer = (state) => ({
     ...state,
     players: removeLastItem(state.players),
});

const reducer = (state, action) => {
     switch (action.type) {
          case "addPlayer": return addPlayer(state, action);
          case "clearList": return clearList();
          case "generateTeams": return generateTeams(state, action);
          case "deletePlayer": return deletePlayer(state, action);
          default: return state;
     }
};

export default reducer;