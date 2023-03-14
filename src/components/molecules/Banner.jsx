import BannerPhoto from "../atoms/Banner-photo";
import DotAnimation from "../atoms/Dot-animation";
import UserInfo from "../atoms/User-Information";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row justify-center gap-10 items-center pb-10">
      <BannerPhoto
        photoUrl="https://img.ice.co.il/giflib/news/14ice02092021.jpg"
        alt="photo-ghaly"
      />
      <div>
        <DotAnimation />
        <h2 className="text-2xl text-white font-bold font-sans py-3">
          <span className="underline decoration-4 underline-offset-0 decoration-orange-400 ">
            Hacktiv8
          </span>{" "}
          Batch 4 Meetup
        </h2>
        <UserInfo
          location="Jakarta, Indonesia"
          numMembers="2000"
          organizer="Elon Musk"
        />
      </div>
    </div>
  );
};

export default Banner;
