import { PropTypes } from "prop-types";
import { useState } from "react";
import Players from "../Players/Players";
import SelectedPlayers from "../SelectedPlayers/SelectedPlayers";


const MainContainer = ({ handleActiveBtn, active: isActive, handleCoins, coins, toast }) => {
  const [addedPlayers, setAddedPlayers] = useState([]);
  
  const handleSelectedPlayers = (player, price) => {
    const newAddedPlayers = [...addedPlayers, player];
    if(coins<price){
      toast.warn('Please Clam Free Credit and try again!', {
        position: "top-center",
      });
    }else if(addedPlayers.some((newPlayer)=> newPlayer.playerId === player.playerId)){
      toast.error('Player already selected!', {
      });
    }
    else if(newAddedPlayers.length>6){
      toast.error('You have selected 6 players!', {
        position: "top-center",
      });
    }else{
      toast.success(`Congratulations! ${player.name} has been selected`, {
        position: "top-center",
      });
      handleCoins(price);
      setAddedPlayers(newAddedPlayers);}
  };
  
  const handlePlayerRemoval = (id, price) =>{
    const remainingPlayers = addedPlayers.filter((player) => player.playerId !== id);
    setAddedPlayers(remainingPlayers);
    handleCoins(-price);
    toast.info(`Player has been removed successfully!`, {
      });
  }

  return (
    <div className="container mx-auto">
      <div className="flex justify-end -mb-10">
        <button
          onClick={() => handleActiveBtn()}
          className={`${isActive ? "btn bg-lime-400" : "btn"}`}
        >
          Available
        </button>
        <button
          onClick={() => handleActiveBtn()}
          className={`${!isActive ? "btn bg-lime-400" : "btn"}`}
        >
          Selected({addedPlayers.length})
        </button>
      </div>
      {isActive ? (
        <Players handleSelectedPlayers={handleSelectedPlayers}
        toast={toast}
        ></Players>
      ) : (
        <SelectedPlayers 
        addedPlayers={addedPlayers}
        handlePlayerRemoval={handlePlayerRemoval}
        handleActiveBtn={handleActiveBtn}
        toast={toast}
        ></SelectedPlayers>
      )}
    </div>
  );
};

MainContainer.propTypes = {
  handleActiveBtn: PropTypes.func,
  handleCoins: PropTypes.func,
  removePlayer: PropTypes.func,
  toast: PropTypes.func,
  active: PropTypes.bool,
  selectedPlayers: PropTypes.number,
  coins: PropTypes.number,
};

export default MainContainer;
