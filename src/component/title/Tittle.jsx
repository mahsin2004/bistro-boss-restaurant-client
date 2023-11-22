import PropTypes from 'prop-types';
const Tittle = ({header, subHeader}) => {
    return (
        <div className='w-[442px] mx-auto'>
            <p className='text-[#D99904] text-xl text-center pb-4'>{subHeader}</p>
            <h1 className='text-[#151515] text-center text-4xl py-5 border-[#E8E8E8] border-y-[4px]'>{header}</h1>
        </div>
    );
};

Tittle.propTypes = {
    header: PropTypes.string,
    subHeader: PropTypes.string,
}

export default Tittle;