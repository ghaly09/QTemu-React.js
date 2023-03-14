const UserInfo = (props) => {
  return (
    <div className="grid grid-cols-2 gap-x-5">
      <h5 className="text-[16px] py-2 text-white font-base font-bold font-sans">
        Location
      </h5>
      <h5 className="text-[16px] py-2 text-white font-base font-sans">
        {props.location}
      </h5>
      <h5 className="text-[16px] py-2 text-white font-base font-bold font-sans">
        Members
      </h5>
      <h5 className="text-[16px] py-2 text-white font-base font-sans">
        <span className="text-green-300">{props.numMembers}</span>
      </h5>
      <h5 className="text-[16px] py-2 text-white font-base font-bold font-sans">
        Organizers
      </h5>
      <h5 className="text-[16px] py-2 text-white font-base font-sans">
        {props.organizer}
      </h5>
      <div className="pt-5">
        <button className="hover:bg-orange-400 hover:text-black text-slate-100 font-semibold transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-110 bg-transparent border-[1.5px] border-slate-700 shadow-black shadow-2xl hover:border-orange-400 py-2 px-8 rounded-2xl ">
          <a href="#login">Join Us</a>
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
