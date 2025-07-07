import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import FacetSearch from '../components/FacetSearch';
import products from '../data/products';

function Home() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  // Extraire les catégories uniques
  const categories = [...new Set(products.map(product => product.category))];

  const handleFilter = ({ categories, priceRange }) => {
    const filtered = products.filter(product => {
      const matchesCategory = categories.length === 0 || categories.includes(product.category);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesPrice;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nos produits</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <FacetSearch 
            categories={categories} 
            onFilter={handleFilter} 
          />
        </div>
        
        <div className="md:w-3/4">
          {filteredProducts.length === 0 ? (
            <p className="text-gray-500">Aucun produit ne correspond à vos critères de recherche.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;