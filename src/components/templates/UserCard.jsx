// import geometriBg from "../assets/geometri-grid.svg";
import DotAnimation from "../atoms/Dot-animation";
import UserInfo from "../atoms/User-Information";

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
          <DotAnimation />

          <h2 className="text-2xl text-white font-bold font-sans py-3">
            <span className="underline decoration-4 underline-offset-0 decoration-orange-400 ">
              Hacktiv8
            </span>{" "}
            Batch 4 Meetup
          </h2>
          <UserInfo />
        </div>
      </div>
      {/* <div>
        <img src={geometriBg} alt="gometric-bg" />
      </div> */}
    </header>
  );
};

export default UserCard;
