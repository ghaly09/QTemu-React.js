const HeaderTitle = (props) => {
  return (
    <div>
      <h1 className="text-center text-3xl md:text-4xl tracking-wide text-white pt-10 font-semibold font-sans">
        {props.title}
      </h1>
      <h1 className="text-center text-md opacity-75 sm:text-md tracking-wide text-white pt-2 pb-5 font-sans">
        {props.tagline}
      </h1>
      <br />
    </div>
  );
};

export default HeaderTitle;
