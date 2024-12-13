import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
    const style = {
        padding: '20px',
        textAlign: 'center',
        backgroundColor: '#f8f9fa',
        border: '1px solid #ddd',
        borderRadius: '5px'
    };

    return (
        <div style={style}>
            <h2>{greeting}</h2>
            <p>Encuentra los mejores periféricos aqui.</p>
        </div>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired
};

export default ItemListContainer;
