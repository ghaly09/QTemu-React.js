import BtnLogin from "../atoms/Button";
import Navmenu from "../atoms/NavMenu";

const Navbar = () => {
  return (
    <div className="sticky rounded-t-lg bg-gradient-to-r from-[#155799] to-[#159957]">
      <nav className="flex justify-between items-center bg-gradient-to-r from-slate-700 rounded-t-lg h-14 drop-shadow-lg space-x-2 text-center text-sm font-sans font-semibold text-slate-200">
        <div className="flex items-center space-x-2 ">
          <div>
            <h1 className="text-[30px] px-3 hover:text-orange-400">QTemu</h1>
          </div>
          <Navmenu name="Create Meetup" />
          <Navmenu name="Explore" />
        </div>
        <BtnLogin name="Login" />
      </nav>
    </div>
  );
};

export default Navbar;
