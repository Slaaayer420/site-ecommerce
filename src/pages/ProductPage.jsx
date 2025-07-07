import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import products from '../data/products';

function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Produit non trouvé</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full rounded-lg shadow-md"
          />
        </div>
        
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-2xl text-primary font-bold mb-4">${product.price}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <button
            onClick={() => addToCart(product)}
            className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;