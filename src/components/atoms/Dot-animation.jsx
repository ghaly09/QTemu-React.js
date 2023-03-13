const DotAnimation = () => {
  return (
    <div className="flex justify-end">
      <h3 className="text-slate-400 font-semibold px-1">Coming up</h3>
      <span className="relative flex h-4 w-4 pt-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-orange-500"></span>
      </span>
    </div>
  );
};

export default DotAnimation;
