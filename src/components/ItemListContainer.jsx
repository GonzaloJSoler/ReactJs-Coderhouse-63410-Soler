import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const ItemListContainer = ({ greeting }) => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const mockData = [
                { id: '1', category: 'teclados', name: 'Teclado Mecánico' },
                { id: '2', category: 'mouses', name: 'Mouse Gamer' },
                { id: '3', category: 'monitores', name: 'Monitor 4K' },
            ];
            const filteredProducts = id ? mockData.filter((item) => item.category === id) : mockData;
            setProducts(filteredProducts);
        };
        fetchProducts();
    }, [id]);

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>{greeting}</h2>
            {products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <a href={`/item/${product.id}`}>{product.name}</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay productos disponibles.</p>
            )}
        </div>
    );
};

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};

export default ItemListContainer;