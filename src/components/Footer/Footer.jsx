import logo from "../../assets/logo-footer.png";
import shadow from '../../assets/bg-shadow.png';

const Footer = () => {
  return (
    <div className="mt-40">
      <footer className="bg-black p-10 flex flex-col items-center">
      <div className="hero border border-white -mt-40 p-6 rounded-2xl bg-[#ffffff23] mb-12 container mx-auto">
         <img src={shadow} alt="" className="w-full h-full lg:h-52 bg-white rounded-xl"/>
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-xl max-md:pt-8 lg:text-2xl font-bold">Subscribe to our Newsletter</h1>
            <p className="py-6">Get the latest updates and news right in your inbox!
            </p>
            <fieldset className="form-control">
              <div className="space-x-3 max-sm:space-y-4">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered"
                />
                <button className="btn bg-gradient-to-r	from-pink-400 to-yellow-200 border-none join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
        <img src={logo} alt="" className="w-36 mb-16" />
        <div className="container mx-auto grid lg:grid-cols-3">
          <nav>
            <h6 className="text-lg font-bold text-white">About Us</h6>
            <p className="text-gray-500 w-1/2">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </nav>
          <ul className="flex flex-col list-disc">
            <h6 className="text-lg font-bold text-white">Quick links</h6>
            <li className="link link-hover text-gray-500">Home</li>
            <li className="link link-hover text-gray-500">Team</li>
            <li className="link link-hover text-gray-500">Schedule</li>
            <li className="link link-hover text-gray-500">Contact</li>
          </ul>
          <form>
            <h6 className="text-lg font-bold text-white">Newsletter</h6>
            <p className="text-gray-500 w-2/3 mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <fieldset className="form-control w-80">
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn bg-gradient-to-r	from-pink-400 to-yellow-200 border-none join-item">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
