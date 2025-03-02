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
import ApparelCard from './components/home_tab_components/ApparelCard';
import ToysCard from './components/home_tab_components/ToysCard';
import CartsText from './components/home_tab_components/CartsText';
import CartOneImage from './components/home_tab_components/CartOneImage';
import CartOneBusinessName from './components/home_tab_components/CartOneBusinessName';
import CartOneBusinessPrice from './components/home_tab_components/CartOneBusinessPrice';
import ViewBusinessOneCartButton from './components/home_tab_components/ViewBusinessOneCartButton';
import CartTwoImage from './components/home_tab_components/CartTwoImage';
import CartTwoBusinessName from './components/home_tab_components/CartTwoBusinessName';
import CartTwoBusinessPrice from './components/home_tab_components/CartTwoBusinessPrice';
import ViewBusinessTwoCartButton from './components/home_tab_components/ViewBusinessTwoCartButton';
import CartThreeImage from './components/home_tab_components/CartThreeImage';
import CartThreeBusinessName from './components/home_tab_components/CartThreeBusinessName';
import CartThreeBusinessPrice from './components/home_tab_components/CartThreeBusinessPrice';
import ViewBusinessThreeCartButton from './components/home_tab_components/ViewBusinessThreeCartButton';
import CompanionChatHeader from './components/companion_tab_components/CompanionChatHeader';
import ChatMessage from './components/companion_tab_components/ChatMessage';
import ChatInput from './components/companion_tab_components/ChatInput';
import ProductDetailOne from './components/home_tab_components/ProductDetailOne';
import ProductDetailTwo from './components/home_tab_components/ProductDetailTwo';
import MeCard from './components/me_tab_components/MeCard';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const [activeCategory, setActiveCategory] = useState('Beauty');
  const [activeFilter, setActiveFilter] = useState('All');
  const [messages, setMessages] = useState([
    { isBot: true, text: "Hi, welcome to Daxedax! I can help you find and buy what you're looking for. What are you shopping for today?", avatar: 'https://assets.api.uizard.io/api/cdn/stream/57326620-2a53-4912-9b70-e6a4f364b204.png' },
  ]);
  const [showProductDetailOne, setShowProductDetailOne] = useState(false);
  const [showProductDetailTwo, setShowProductDetailTwo] = useState(false);
  const [meTabTrigger, setMeTabTrigger] = useState(0);

  const handleSendMessage = (newMessage) => {
    setMessages((prev) => [...prev, { isBot: false, text: newMessage, avatar: null }]);

    // Simulate Daxedax's response with product recommendations if the message is a prompt or dress-related
    if (suggestionOptions.some(option => newMessage.includes(option)) || newMessage.toLowerCase().includes('dress')) {
      setTimeout(() => {
        const products = [
          { name: 'Mango Textured Coat', price: '$129.99', image: 'https://assets.api.uizard.io/api/cdn/stream/1bd902b0-209c-4d5f-8e63-99d55c9016ba.png', id: 1 },
          { name: 'Zara Double breasted Coat', price: '$199.00', image: 'https://assets.api.uizard.io/api/cdn/stream/fecff665-0ba6-4922-888b-84d485e1e917.png', id: 2 },
          { name: 'H&M Wool-blend Coat', price: '$99.99', image: 'https://assets.api.uizard.io/api/cdn/stream/d20da14a-9c71-4b23-9104-66542fb7ab2b.png', id: 3 },
        ];
        setMessages((prev) => [
          ...prev,
          { 
            isBot: true, 
            text: "I found some options for you. You can tap the link to see more details.", 
            avatar: 'https://assets.api.uizard.io/api/cdn/stream/57326620-2a53-4912-9b70-e6a4f364b204.png', 
            products 
          },
        ]);
      }, 1000);
    }
  };

  const suggestionOptions = [
    'What type of dress are you looking for...',
    'Are you shopping for a specific occasion...',
    'Do you have a favorite brand or design...',
    'How much would you like to spend?',
  ];

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
    if (category === 'Beauty' || category === 'Apparel' || category === 'Toys') {
      setActiveFilter('All');
    }
    setActiveTab('Home');
  };

  const handleMainTabClick = (tabName) => {
    setActiveTab(tabName);
    if (tabName === 'Home') {
      setActiveCategory('Beauty');
      setActiveFilter('All');
    } else if (tabName === 'Me') {
      setMeTabTrigger((prev) => prev + 1);
    }
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  const handleProductOneClick = () => {
    setShowProductDetailOne(true);
  };

  const handleProductTwoClick = () => {
    setShowProductDetailTwo(true);
  };

  const handleCloseProductDetailOne = () => {
    setShowProductDetailOne(false);
    setActiveTab('Home');
    setActiveCategory('Beauty');
    setActiveFilter('All');
  };

  const handleCloseProductDetailTwo = () => {
    setShowProductDetailTwo(false);
    setActiveTab('Home');
    setActiveCategory('Beauty');
    setActiveFilter('All');
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
              <Card
                activeFilter={activeFilter}
                onFilterClick={handleFilterClick}
                onProductOneClick={handleProductOneClick}
                onProductTwoClick={handleProductTwoClick}
              />
            )}
            {activeCategory === 'Apparel' && (
              <ApparelCard
                activeFilter={activeFilter}
                onFilterClick={handleFilterClick}
              />
            )}
            {activeCategory === 'Toys' && (
              <ToysCard
                activeFilter={activeFilter}
                onFilterClick={handleFilterClick}
              />
            )}
          </div>
        </>
      )}
      {activeTab === 'Companion' && (
        <div className="scrollable-content companion-chat">
          <CompanionChatHeader />
          <div className="chat-messages">
            {messages.map((message, index) => (
              <ChatMessage key={index} isBot={message.isBot} text={message.text} avatar={message.avatar} products={message.products} />
            ))}
          </div>
          <ChatInput onSend={handleSendMessage} />
        </div>
      )}
      {activeTab === 'Me' && (
        <div className="scrollable-content">
          <MeCard onMeTabChange={meTabTrigger} />
        </div>
      )}
      {activeTab === 'Carts' && (
        <>
          <CartsText className="fixed-carts-text" />
          <div className="scrollable-content">
            <div className="cart-row">
              <CartOneImage />
              <div className="cart-column">
                <CartOneBusinessName />
                <CartOneBusinessPrice />
              </div>
              <ViewBusinessOneCartButton />
            </div>
            <div className="cart-row-two">
              <CartTwoImage />
              <div className="cart-column-two">
                <CartTwoBusinessName />
                <CartTwoBusinessPrice />
              </div>
              <ViewBusinessTwoCartButton />
            </div>
            <div className="cart-row-three">
              <CartThreeImage />
              <div className="cart-column-three">
                <CartThreeBusinessName />
                <CartThreeBusinessPrice />
              </div>
              <ViewBusinessThreeCartButton />
            </div>
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
      {showProductDetailOne && (
        <ProductDetailOne onClose={handleCloseProductDetailOne} />
      )}
      {showProductDetailTwo && (
        <ProductDetailTwo onClose={handleCloseProductDetailTwo} />
      )}
    </div>
  );
}

export default App;