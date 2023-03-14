import HeaderTitle from "../atoms/Header-title";
import Banner from "../molecules/Banner";

const Header = () => {
  return (
    <header id="about" className="bg-slate-900 shadow-2xl">
      <HeaderTitle
        title="WELCOME TO HACKTIV8 MEETUP"
        tagline="Great to see you again!"
      />
      {/* Meetup Card */}
      <Banner />
      {/* <div>
        <img src={geometriBg} alt="gometric-bg" />
      </div> */}
    </header>
  );
};

export default Header;
