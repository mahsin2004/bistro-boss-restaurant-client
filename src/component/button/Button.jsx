import PropTypes from 'prop-types';

const Button = ({btnName, bg, textColor, hoverText, hoverBg, borderColor, hoverBorderColor}) => {
  return (
    <div className={`text-${textColor} mt-4`}>
      <button className={`px-[30px] py-[10px] rounded-lg hover:text-${hoverText} border-${borderColor} hover:border-${hoverBorderColor} border-b-4 hover:bg-${hoverBg} bg-${bg}`}>
        {btnName}
      </button>
    </div>
  );
};

Button.propTypes = {
    btnName: PropTypes.string,
    textColor: PropTypes.string,
    borderColor: PropTypes.string,
    bg: PropTypes.string,
    hoverText: PropTypes.string,
    hoverBg: PropTypes.string,
    hoverBorderColor: PropTypes.string,
}

export default Button;
