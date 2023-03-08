const MeetCards = (props) => {
  return (
    <div className="rounded-md border w-64 h-64 shadow-md flex-none">
      <div className="p-3">
        <h5 className="text-start border-b-2 pb-1 font-semibold">
          {props.date}
        </h5>
        <h5 className="py-3 font-semibold">{props.desc}</h5>
        <h5 className="py-3 font-semibold">
          {props.lastDays} <span className=" text-slate-400">went</span>
        </h5>
        <div className="flex justify-end pt-5 pr-3">
          <button className="hover:bg-orange-400 font-semibold hover:text-white transition-colors bg-transparent border-[1.5px] bg-orange-400 py-2 px-8 rounded-2xl ">
            <a href="#view">View</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetCards;
