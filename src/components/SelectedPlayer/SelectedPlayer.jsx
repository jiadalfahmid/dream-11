import { RiDeleteBinLine } from "react-icons/ri";
import { PropTypes } from 'prop-types';

const SelectedPlayer = ({addedPlayer, handlePlayerRemoval}) => {
   const {name, image, role, biddingPrice, playerId} = addedPlayer;
   return (
      <div className="mt-8">
         <div className="border rounded-lg p-6 flex justify-between items-center">
            <div className="flex gap-4">
               <img src={image} alt="" className="w-24 h-24 object-cover rounded-md" />
               <div className="">
                  <h3 className="font-bold text-lg">{name}</h3>
                  <p>{role}</p>
                  <p className="font-bold">Price: ${biddingPrice}</p>
               </div>
            </div>
            <button onClick={() => handlePlayerRemoval(playerId, biddingPrice)} className="text-xl text-red-600"><RiDeleteBinLine/></button>
         </div>
      </div>
   );
};

SelectedPlayer.propTypes={
   handlePlayerRemoval: PropTypes.func,
   addedPlayer: PropTypes.object,
}

export default SelectedPlayer;