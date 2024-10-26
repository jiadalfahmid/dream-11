import { PropTypes } from "prop-types";
import { FaRegUser } from 'react-icons/fa';
import { FaRegFlag } from 'react-icons/fa';


const Player = ({ player, handleSelectedPlayers }) => {
  const {name, country, image, role, battingType, bowlingType, biddingPrice } =
    player;
  return (
    <div className="">
      <div className="p-6 border rounded-xl">
         <img src={image} alt="" className="h-56 rounded-lg w-full object-cover mb-6"/>
         <div className="flex gap-4 items-center">
            <FaRegUser/>
            <h3 className="font-bold text-lg">{name}</h3>
         </div>
         <div className="flex gap-4 items-center justify-between pb-4 border-b-2">
            <div className="flex items-center gap-4 text-gray-600"><FaRegFlag/> {country}</div>
            <h3 className="bg-slate-50 p-2 rounded-lg font-semibold">{role}</h3>
         </div>
         <h3 className="font-bold mt-4 text-lg">Rating</h3>
         <div className="flex mt-4 justify-between">
            <p className="font-semibold">{battingType}</p>
            <p className="font-medium text-gray-600">{bowlingType}</p>
         </div>
         <div className="flex justify-between items-center mt-1">
            <p className="font-semibold">Price: ${biddingPrice}</p>
            <button onClick={()=>handleSelectedPlayers(player, biddingPrice)} className="btn bg-white border-gray-300">Choose Player</button>
         </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object,
  handleSelectedPlayers: PropTypes.func
};

export default Player;
