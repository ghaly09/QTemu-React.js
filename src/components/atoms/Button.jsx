const Button = (props) => {
  return (
    <div className="px-3">
      <button className="hover:bg-orange-400 hover:text-black transition ease-in-out delay-150 hover:-translate-y-1 duration-300 hover:scale-110 bg-transparent border-[1.5px] border-transparent shadow-black shadow-2xl hover:border-orange-400 py-2 px-8 rounded-2xl ">
        <a href="#login">{props.name}</a>
      </button>
    </div>
  );
};

export default Button;
