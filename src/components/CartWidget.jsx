import { FaShoppingCart } from 'react-icons/fa'; 

const CartWidget = () => {
  const cartCount = 0; 

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'relative' }}>
        <FaShoppingCart size={24} />
        <span
          style={{
            position: 'absolute',
            top: '-5px',
            right: '-10px',
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            padding: '1px 6px',
            fontSize: '12px',
            fontWeight: 'bold'
          }}
        >
          {cartCount}
        </span>
      </div>
    </div>
  );
};

export default CartWidget;

