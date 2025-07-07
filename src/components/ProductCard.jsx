import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Empêche la navigation si on clique sur le bouton
    addToCart(product);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 block"
    >
      <img 
        src={product.image} 
        alt={product.name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <div className="flex justify-between items-center mb-2">
          <span className="text-gray-600">{product.category}</span>
          <span className="text-lg font-bold text-primary">${product.price}</span>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-primary hover:bg-secondary text-white px-4 py-2 rounded transition-colors"
        >
          Ajouter au panier
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;