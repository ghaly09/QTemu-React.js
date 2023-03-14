const BannerPhoto = (props) => {
  return (
    <div>
      <img
        className="max-w-52 max-h-52 sm:max-w-64 sm:max-h-64 rounded-l-3xl shadow-sm"
        src={props.photoUrl}
        alt={props.alt}
      />
    </div>
  );
};

export default BannerPhoto;
