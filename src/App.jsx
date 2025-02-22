// src/App.jsx
import React, { useState } from 'react';
import Text from './components/home_tab_components/Text';
import SearchBar from './components/home_tab_components/SearchBar';
import BeautyTabIcon from './components/home_tab_components/BeautyTabIcon';
import Card from './components/home_tab_components/Card';
import BeautyCategoryText from './components/home_tab_components/BeautyCategoryText';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Home'); // "Home" is default active

  const tabs = [
    {
      name: 'Home',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
          <path d="M218.83,103.77l-80-75.48a16,16,0,0,0-21.53,0L37.17,103.77A16,16,0,0,0,32,115.55V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V115.55A16,16,0,0,0,218.83,103.77Z" />
        </svg>
      ),
    },
    {
      name: 'Companion',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
          <path d="M172,120a44,44,0,1,1-44-44A44,44,0,0,1,172,120Zm52-12a44,44,0,1,0-44,44A44,44,0,0,0,224,108Zm-192,0a44,44,0,1,0,44,44A44,44,0,0,0,32,108Z" />
        </svg>
      ),
    },
    {
      name: 'Me',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
          <path d="M128,72a44,44,0,1,1,44-44A44,44,0,0,1,128,72Zm0,72a44,44,0,1,1,44-44A44,44,0,0,1,128,144Z" />
        </svg>
      ),
    },
    {
      name: 'Carts',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256">
          <path d="M184,184a24,24,0,1,1-24-24A24,24,0,0,1,184,184Zm-80-24a24,24,0,1,0,24,24A24,24,0,0,0,104,160Zm128-88V216a16,16,0,1,1-16,16H32a16,16,0,0,1-16-16V72A16,16,0,0,1,32,56H48L72,24A8,8,0,0,1,80,24H176a8,8,0,0,1,8,8Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="mobile-container">
      {activeTab === 'Home' && (
        <div className="home-content">
          <Text text="Search" />
          <SearchBar />
          <BeautyTabIcon />
          <BeautyCategoryText />
          <Card />
        </div>
      )}
      <div className="content">
        <p>Active Tab: {activeTab}</p>
      </div>
      <div className="tab-bar">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`tab ${activeTab === tab.name ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.name)}
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