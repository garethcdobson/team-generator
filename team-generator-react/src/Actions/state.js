export const addPlayer = (player) => {
     console.log(player)
     return {
          type: "addPlayer",
          players: player,
     };
};