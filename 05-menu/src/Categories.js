import React from 'react';

const Categories = ({ filterItems, categories }) => {
  const categoryArray = categories.map((category, index) =>
    <button
      type='button'
      key={index}
      className='filter-btn'
      onClick={() => filterItems(category)}>
      {category}
    </button>)

  return (
    <div className='btn-container'>
      {categoryArray}
    </div>
  );
};

export default Categories;
