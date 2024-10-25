import PropTypes from "prop-types";
import bannerIcon from "../../assets/banner-main.png";
import backgroundImage from "../../assets/bg-shadow.png";

const Banner = ({ handleCoins }) => {
  return (
    <div className="container mx-auto">
      <div className="hero my-8">
        <img src={backgroundImage} alt="" className="bg-black rounded-xl max-sm:h-96"/>
        <div className="hero-content text-neutral-content text-center">
          <div className="flex flex-col items-center">
            <img src={bannerIcon} alt="" className="w-20 lg:w-44 mb-8" />
            <h1 className="mb-5 text-2xl lg:text-4xl font-bold text-white">Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className="mb-5 text-gray-400 font-medium">
            Beyond Boundaries Beyond Limits
            </p>
            <div className="border p-2 rounded-2xl border-lime-300">
              <button onClick={() => handleCoins()} className="btn bg-lime-400 border-lime-300 hover:bg-lime-300 rounded-xl">
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleCoins: PropTypes.func,
};

export default Banner;
