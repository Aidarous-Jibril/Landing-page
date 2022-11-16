import React from 'react';

const Categories = ({categories, filterItems}) => {

  return (

  <div className='cotegories__btn-container'>
    {categories.map((category, index)=> (
       <button 
          type='button' 
          className='filter-btn' 
          key={index} 
          onClick={()=> filterItems(category)}>
          {category}
      </button>
    ))}
 
  </div>
  );
};

export default Categories;