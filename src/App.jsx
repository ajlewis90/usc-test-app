// src/App.jsx
import React, { useState } from 'react';
import Text from './components/home_tab_components/Text';
import SearchBar from './components/home_tab_components/SearchBar';
import BeautyTabIcon from './components/home_tab_components/BeautyTabIcon';
import BeautyCategoryText from './components/home_tab_components/BeautyCategoryText';
import ApparelIcon from './components/home_tab_components/ApparelIcon';
import ApparelText from './components/home_tab_components/ApparelText';
import FurnitureIcon from './components/home_tab_components/FurnitureIcon';
import FurnitureText from './components/home_tab_components/FurnitureText';
import ShoesIcon from './components/home_tab_components/ShoesIcon';
import ShoesText from './components/home_tab_components/ShoesText';
import ToysIcon from './components/home_tab_components/ToysIcon';
import ToysText from './components/home_tab_components/ToysText';
import GlassesIcon from './components/home_tab_components/GlassesIcon';
import GlassesText from './components/home_tab_components/GlassesText';
import HouseCleaningIcon from './components/home_tab_components/HouseCleaningIcon';
import HouseCleaningText from './components/home_tab_components/HouseCleaningText';
import PersonalCareIcon from './components/home_tab_components/PersonalCareIcon';
import PersonalCareText from './components/home_tab_components/PersonalCareText';
import Card from './components/home_tab_components/Card';
import CartsText from './components/home_tab_components/CartsText';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [activeCategory, setActiveCategory] = useState('Beauty');
  const [activeFilter, setActiveFilter] = useState('All');

  const mainTabs = [
    { name: 'Home', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M218.83,103.77l-80-75.48a16,16,0,0,0-21.53,0L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77Z" /></svg> },
    { name: 'Companion', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M172,120a44,44,0,1,1-44-44A44,44,0,0,1,172,120Zm52-12a44,44,0,1,0-44,44A44,44,0,0,0,224,108Zm-192,0a44,44,0,1,0,44,44A44,44,0,0,0,32,108Z" /></svg> },
    { name: 'Me', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,72a44,44,0,1,1,44-44A44,44,0,0,1,128,72Zm0,72a44,44,0,1,1,44-44A44,44,0,0,1,128,144Z" /></svg> },
    { name: 'Carts', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M184,184a24,24,0,1,1-24-24A24,24,0,0,1,184,184Zm-80-24a24,24,0,1,0,24,24A24,24,0,0,0,104,160Zm128-88V216a16,16,0,1,1-16,16H32a16,16,0,1,1-16-16V72A16,16,0,0,1,32,56H48L72,24A8,8,0,0,1,80,24H176a8,8,0,0,1,8,8Z" /></svg> },
  ];

  const categoryTabs = [
    { name: 'Beauty', Icon: BeautyTabIcon, Text: BeautyCategoryText },
    { name: 'Apparel', Icon: ApparelIcon, Text: ApparelText },
    { name: 'Furniture', Icon: FurnitureIcon, Text: FurnitureText },
    { name: 'Shoes', Icon: ShoesIcon, Text: ShoesText },
    { name: 'Toys', Icon: ToysIcon, Text: ToysText },
    { name: 'Glasses', Icon: GlassesIcon, Text: GlassesText },
    { name: 'House Cleaning', Icon: HouseCleaningIcon, Text: HouseCleaningText },
    { name: 'Personal Care', Icon: PersonalCareIcon, Text: PersonalCareText },
  ];

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === 'Beauty') {
      setActiveFilter('All');
    }
  };

  const handleMainTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === 'Home') {
      setActiveCategory('Beauty');
      setActiveFilter('All');
    }
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="mobile-container">
      {activeTab === 'Home' && (
        <>
          <div className="search-section">
            <Text text="Search" />
            <SearchBar className="fixed-search-bar" />
          </div>
          <div className="scrollable-content">
            <div className="category-tabs">
              {categoryTabs.map(({ name, Icon, Text }) => (
                <div
                  key={name}
                  className={`category-tab ${activeCategory === name ? 'active' : ''}`}
                  onClick={() => handleCategoryClick(name)}
                >
                  <Icon />
                  <Text />
                </div>
              ))}
            </div>
            {activeCategory === 'Beauty' && (
              <Card activeFilter={activeFilter} onFilterClick={handleFilterClick} />
            )}
          </div>
        </>
      )}
      {activeTab === 'Companion' && (
        <div className="scrollable-content">
          <p>Active Tab: Companion</p>
        </div>
      )}
      {activeTab === 'Me' && (
        <div className="scrollable-content">
          <p>Active Tab: Me</p>
        </div>
      )}
      {activeTab === 'Carts' && (
        <>
          <CartsText className="fixed-carts-text" />
          <div className="scrollable-content">
            <p>Active Tab: Carts</p>
          </div>
        </>
      )}
      <div className="tab-bar">
        {mainTabs.map((tab) => (
          <button
            key={tab.name}
            className={`tab ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => handleMainTabClick(tab.name)}
          >
            <span className="tab-icon">{tab.icon}</span>
            <span className="tab-label">{tab.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;