const NextMeetup = (props) => {
  return (
    <section id="education" className="px-[2rem] sm:px-[10rem] bg-white pb-5">
      <div className="flex flex-wrap justify-between text-2xl py-5 text-slate-800 font-bold font-sans">
        <h2 className="text-2xl">Next Meetup</h2>
        <h2 className="flex text-lg items-center">
          <a href="#see-all">See all</a>
        </h2>
      </div>
      <div className="rounded-md border w-auto h-auto">
        <div className="p-3">
          <h5 className="text-start text-lg font-semibold">{props.title}</h5>
          <h5 className="text-start text-slate-400 border-b-2 pb-1 font-semibold">
            {props.date}
          </h5>
          <h5 className="py-3 text-md text-blueGray-600">{props.desc}</h5>
          <h5 className="py-3 font-semibold text-normal">
            {props.numMembers}{" "}
            <span className=" text-slate-400">Max Members</span>
          </h5>
          <div className="flex justify-end pt-5 pr-3">
            <button className="hover:bg-orange-400 font-semibold hover:text-white transition-colors bg-transparent border-[1.5px] bg-orange-400 py-2 px-8 rounded-2xl ">
              <a href="#view">View</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextMeetup;
