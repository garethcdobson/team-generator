export const addPlayer = (player) => {
     return {
          type: "addPlayer",
          players: player,
     };
};

export const clearList = () => {
     return {
        type: "clearList",
     };
};

export const generateTeams = () => {
     return {
          type: "generateTeams",
     }
};