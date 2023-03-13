const Navmenu = (props) => {
  return (
    <div className="hover:text-orange-400 border-t hover:border-b border-t-transparent hover:border-b-orange-400 px-4 py-4">
      <a href="#education">{props.name}</a>
    </div>
  );
};

export default Navmenu;
