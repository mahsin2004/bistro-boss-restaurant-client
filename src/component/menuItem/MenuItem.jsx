import PropTypes from "prop-types";

const MenuItem = ({ price, img, title, description }) => {
  return (
    <div className="flex gap-4">
      <img
        className="rounded-b-[200px] rounded-tr-[200px] w-[118px]"
        src={img}
        alt=""
      />
      <div>
        <h1 className="text-xl">{title} --------------</h1>
        <p>{description}</p>
      </div>
      <p>${price}</p>
    </div>
  );
};

MenuItem.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};


export default MenuItem;
