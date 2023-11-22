import PropTypes from 'prop-types';


const Container = ({children}) => {
    return (
        <div className='max-w-7xl mx-auto py-16'>
            {children}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.object,
}

export default Container;