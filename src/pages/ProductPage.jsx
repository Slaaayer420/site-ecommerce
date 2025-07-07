import { useParams } from 'react-router-dom';
import { useState } from 'react';
import products from '../data/products';
import Survey from '../components/Survey';

function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const [quantity, setQuantity] = useState(1);

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
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  className={`h-5 w-5 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`} 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-gray-600">{product.reviews} avis</span>
          </div>
          
          <p className="text-2xl font-bold text-primary mb-4">${product.price}</p>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="flex items-center mb-6">
            <span className="mr-2">Quantité:</span>
            <div className="flex items-center border rounded">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 bg-gray-100"
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 bg-gray-100"
              >
                +
              </button>
            </div>
          </div>
          
          <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium w-full md:w-auto">
            Ajouter au panier
          </button>
        </div>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <p className="text-gray-700">{product.longDescription}</p>
      </div>
      
      <div className="mt-12">
        <Survey />
      </div>
    </div>
  );
}

export default ProductPage;