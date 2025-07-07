import { useState } from 'react';

function FacetSearch({ categories, onFilter }) {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (category) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(newCategories);
    onFilter({ categories: newCategories, priceRange });
  };

  const handlePriceChange = (min, max) => {
    const newRange = [min, max];
    setPriceRange(newRange);
    onFilter({ categories: selectedCategories, priceRange: newRange });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="font-bold text-lg mb-4">Filtrer les produits</h3>
      
      <div className="mb-6">
        <h4 className="font-semibold mb-2">Catégories</h4>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
                className="mr-2"
              />
              {category}
            </label>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold mb-2">Prix</h4>
        <div className="flex items-center justify-between mb-2">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="0"
          max="1000"
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default FacetSearch;