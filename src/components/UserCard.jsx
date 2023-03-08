// import geometriBg from "../assets/geometri-grid.svg";

const UserCard = () => {
  return (
    <header id="about" className="bg-slate-900 shadow-2xl">
      <h1 className="text-center text-3xl md:text-4xl tracking-wide text-white pt-10 font-semibold font-sans">
        WELCOME TO HACKTIV8 MEETUP
      </h1>
      <h1 className="text-center text-md opacity-75 sm:text-md tracking-wide text-white pt-2 pb-5 font-sans">
        Great to see you again!
      </h1>
      <br />
      {/* Meetup Card */}
      <div className="flex flex-col-reverse sm:flex-row justify-center gap-10 items-center pb-10">
        <div>
          <img
            className="max-w-52 max-h-52 sm:max-w-64 sm:max-h-64 rounded-l-3xl shadow-sm"
            src="https://img.ice.co.il/giflib/news/14ice02092021.jpg"
            alt="foto-profil-ghaly"
          />
        </div>
        <div>
          <div className="flex justify-end">
            <h3 className="text-slate-400 font-semibold px-1">Coming up</h3>
            <span className="relative flex h-4 w-4 pt-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500"></span>
            </span>
          </div>

          <h2 className="text-2xl text-white font-bold font-sans py-3">
            <span className="underline decoration-4 underline-offset-0 decoration-orange-400 ">
              Hacktiv8
            </span>{" "}
            Batch 4 Meetup
          </h2>
          <div className="grid grid-cols-2 gap-x-5">
            <h5 className="text-[16px] py-2 text-white font-base font-bold font-sans">
              Location
            </h5>
            <h5 className="text-[16px] py-2 text-white font-base font-sans">
              Jakarta, Indonesia
            </h5>
            <h5 className="text-[16px] py-2 text-white font-base font-bold font-sans">
              Members
            </h5>
            <h5 className="text-[16px] py-2 text-white font-base font-sans">
              <span className="text-green-300">2000</span>
            </h5>
            <h5 className="text-[16px] py-2 text-white font-base font-bold font-sans">
              Organizers
            </h5>
            <h5 className="text-[16px] py-2 text-white font-base font-sans">
              Elon Musk
            </h5>
            <div className="pt-5">
              <button className="hover:bg-orange-400 hover:text-black text-slate-100 font-semibold transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-110 bg-transparent border-[1.5px] border-slate-700 shadow-black shadow-2xl hover:border-orange-400 py-2 px-8 rounded-2xl ">
                <a href="#login">Join Us</a>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <img src={geometriBg} alt="gometric-bg" />
      </div> */}
    </header>
  );
};

export default UserCard;
