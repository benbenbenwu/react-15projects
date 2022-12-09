import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map(item => item.category))]

function App() {

  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)


  const filterItems = (category) => setMenuItems(
    category === 'all'
      ? items
      : items.filter(menu => menu.category === category)
  )

  return (
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
