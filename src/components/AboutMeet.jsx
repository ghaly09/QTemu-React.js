const AboutMeet = () => {
  return (
    <section id="aboutMeetup" className="px-[2rem] sm:px-[10rem] bg-white">
      <h2 className="flex flex-wrap text-2xl py-5 text-slate-800 font-bold font-sans">
        About Meetup
      </h2>
      {/* <div className="flex flex-wrap justify-start text-center items-center gap-x-40 gap-y-8">
        <div className="w-52">
          <div className="grid grid-cols-2 items-start">
            <img
              className="w-[4.5rem] sm:w-20 justify-center"
              src="assets/ipb.png"
              alt="logo-ipb"
            />
            <span className="pt-2">
              <h3 className="font-bold text-sm text-left w-60 sm:w-72">
                IPB University
                <p className="font-normal text-sm text-left w-60 sm:w-72">
                  Undergraduate, Physics
                </p>
              </h3>
            </span>
          </div>
        </div>
      </div> */}
      <h4 class="flex flex-row items-center text-xl fonat-semibold text-blueGray-700">
        <img
          src="https://img.icons8.com/emoji/256/waving-hand-emoji.png"
          alt="hand-wave"
          width={40}
        />{" "}
        <span className="px-1">Let's Join and collaborate!</span>
        <h5 className="text-lg text-blueGray-600 px-1">
          Come and meet other developers interested in the JavaScript and it's
          library in the Greater Jakarta area.
        </h5>
      </h4>

      <h5 className="text-lg font-semibold text-end">
        <i className="fa fa-twitter text-blue-400"></i> @JakartaJS #JakartaJS
      </h5>
    </section>
  );
};

export default AboutMeet;
