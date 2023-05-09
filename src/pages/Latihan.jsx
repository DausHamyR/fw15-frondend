import { useState } from 'react';

const categories = ['Food', 'Travel', 'Fashion', 'Sports'];

const CategoryList = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <button onClick={() => handleClick(category)}>{category}</button>
          </li>
        ))}
      </ul>
      {selectedCategory && (
        <div>
          <h3>{selectedCategory}</h3>
          <p>Here is some information about {selectedCategory}.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryList;
