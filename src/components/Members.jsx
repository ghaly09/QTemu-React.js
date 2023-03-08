const Members = () => {
  return (
    <section id="education" className="px-[2rem] sm:px-[10rem] bg-white">
      <div className="flex flex-wrap justify-between text-2xl py-5 text-slate-800 font-bold font-sans">
        <h2 className="text-2xl">Members</h2>
        <h2 className="flex text-lg items-center">
          <a href="#see-all">See all</a>
        </h2>
      </div>

      <div className="flex flex-wrap justify-start text-center items-center gap-x-40 gap-y-8">
        <div className="w-52">
          <div className="grid grid-cols-2 items-center">
            <img
              className="w-[4.5rem] sm:w-20 rounded-full justify-center"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTafbAW9soycd6OQd8S26-JIKZl9ywncx4zJw&usqp=CAU"
              alt="elon"
            />
            <span className="py-0">
              <h3 className="text-blueGray-600 font-semibold text-md text-left w-60 sm:w-72">
                Organizers
                <p className="font-normal text-blueGray-600 text-sm text-left w-60 sm:w-72">
                  Elon Musk <span className="text-lg px-2">•</span> 3 Others
                </p>
              </h3>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
