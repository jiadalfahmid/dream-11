import { useState } from "react";
import { useEffect } from "react";
import PropTypes from "prop-types";
import Player from "../Player/Player";

const Players = ({ handleSelectedPlayers }) => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div>
      <h2 className="font-bold text-lg lg:text-2xl">Available Players</h2>
      <div className="grid lg:grid-cols-3 gap-6 mt-8">
         {players.map((player) => (
           <Player
             handleSelectedPlayers={handleSelectedPlayers}
             key={player.playerId}
             player={player}
           ></Player>
         ))}
      </div>
    </div>
  );
};

Players.propTypes = {
  handleSelectedPlayers: PropTypes.func,
};

export default Players;
