import { PropTypes } from "prop-types";
import SelectedPlayer from "./../SelectedPlayer/SelectedPlayer";

const SelectedPlayers = ({ addedPlayers, handlePlayerRemoval, handleActiveBtn}) => {
  return (
    <div>
      <h2 className="font-bold text-lg lg:text-2xl">
        Selected Players ({addedPlayers.length}/6)
      </h2>
      {addedPlayers.map((addedPlayer) => (
        <SelectedPlayer
          key={addedPlayer.playerId}
          addedPlayer={addedPlayer}
          handlePlayerRemoval={handlePlayerRemoval}
        ></SelectedPlayer>
      ))}
      <div className="border p-2 rounded-2xl border-lime-300 my-14 w-max">
              <button onClick={handleActiveBtn} className="btn bg-lime-400 border-lime-300 hover:bg-lime-300 rounded-xl ">
              Add More Player
              </button>
            </div>
    </div>
  );
};

SelectedPlayers.propTypes = {
  selectedPlayers: PropTypes.number,
  addedPlayers: PropTypes.array,
  handlePlayerRemoval: PropTypes.func,
  removePlayer: PropTypes.func,
  handleActiveBtn: PropTypes.func,
  isActive: PropTypes.bool
};

export default SelectedPlayers;
