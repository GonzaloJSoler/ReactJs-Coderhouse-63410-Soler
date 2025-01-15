import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const mockData = [
                { id: '1', name: 'Teclado Mecánico', price: 100 },
                { id: '2', name: 'Mouse Gamer', price: 50 },
                { id: '3', name: 'Monitor 4K', price: 300 },
            ];
            const productFound = mockData.find((item) => item.id === id);
            setProduct(productFound);
        };
        fetchProduct();
    }, [id]);

    if (!product) return <p>Cargando producto...</p>;
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
        </div>
    );
};

export default ItemDetailContainer;