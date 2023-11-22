import PropTypes from 'prop-types';


const Cover = ({bgImage, title, description}) => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          `url(${bgImage})`,
      }}
    >
      <div className="hero-overlay bg-opacity-30"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className=" bg-black bg-opacity-40 px-28 py-11">
          <h1 className="max-w-xl mb-5 text-5xl font-bold">{title}</h1>
          <p className="max-w-xl mb-5">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

Cover.propTypes = {
    bgImage: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default Cover;
