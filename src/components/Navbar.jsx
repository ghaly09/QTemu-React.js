const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-slate-700 rounded-t-lg h-14 drop-shadow-lg space-x-2 text-center text-sm font-sans font-semibold text-slate-200">
      <div className="flex items-center space-x-2 ">
        <div>
          <h1 className="text-[30px] px-3 hover:text-orange-400">QTemu</h1>
        </div>
        <div className="hover:text-orange-400 border-t hover:border-b border-t-transparent hover:border-b-orange-400 px-4 py-4">
          <a href="#about">Create Meetup</a>
        </div>
        <div className="hover:text-orange-400 border-t hover:border-b border-t-transparent hover:border-b-orange-400 px-4 py-4">
          <a href="#education">Explore</a>
        </div>
      </div>
      <div className="px-3">
        <button className="hover:bg-orange-400 hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-110 bg-transparent border-[1.5px] border-transparent shadow-black shadow-2xl hover:border-orange-400 py-2 px-8 rounded-2xl ">
          <a href="#login">Login</a>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
