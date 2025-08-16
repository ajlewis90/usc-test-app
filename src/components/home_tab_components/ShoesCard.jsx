// src/components/home_tab_components/ShoesCard.jsx
import React from 'react';
import ShoesAllIcon from './ShoesAllIcon';
import ShoesMenIcon from './ShoesMenIcon';
import ShoesWomenIcon from './ShoesWomenIcon';
import ShoesKidsIcon from './ShoesKidsIcon';
import ShoesAllText from './ShoesAllText';
import ShoesMenText from './ShoesMenText';
import ShoesWomenText from './ShoesWomenText';
import ShoesKidsText from './ShoesKidsText';
import ShoesProductImageOne from './ShoesProductImageOne';
import ShoesProductTextOne from './ShoesProductTextOne';
import ShoesProductOneIndividualPriceText from './ShoesProductOneIndividualPriceText';
import ShoesProductOneSizesText from './ShoesProductOneSizesText';
import JoinGroupButtonSeven from './JoinGroupButtonSeven';
import GroupBuyIconSeven from './GroupBuyIconSeven';
import PriceDropdownButton from './PriceDropdownButton';
import ShoesProductOneGroupCondition from './ShoesProductOneGroupCondition';
import ShoesProductImageTwo from './ShoesProductImageTwo';
import ShoesProductTextTwo from './ShoesProductTextTwo';
import ShoesProductTwoIndividualPriceText from './ShoesProductTwoIndividualPriceText';
import ShoesProductTwoColorsText from './ShoesProductTwoColorsText';
import JoinGroupButtonEight from './JoinGroupButtonEight';
import GroupBuyIconEight from './GroupBuyIconEight';
import ShoesProductTwoGroupCondition from './ShoesProductTwoGroupCondition';
import ProductDetailSeven from './ProductDetailSeven';
import ProductDetailEight from './ProductDetailEight';
import './ShoesCard.css';

const ShoesCard = ({ activeFilter, onFilterClick, onPriceDropdownClick, priceDropdownProduct }) => {
  const [showProductDetailSeven, setShowProductDetailSeven] = React.useState(false);
  const [showProductDetailEight, setShowProductDetailEight] = React.useState(false);

  const handleProductSevenClick = () => {
    setShowProductDetailSeven(true);
  };

  const handleProductEightClick = () => {
    setShowProductDetailEight(true);
  };

  const handleCloseProductDetailSeven = () => {
    setShowProductDetailSeven(false);
  };

  const handleCloseProductDetailEight = () => {
    setShowProductDetailEight(false);
  };

  const handleJoinGroupClick = (e) => {
    e.stopPropagation();
    console.log('Join Group clicked');
  };

  return (
    <div className="shoes-card">
      <div className="shoes-card-content">
        <div className="shoes-card-icons">
          <div
            className={`icon-text-pair ${activeFilter === 'All' ? 'active' : ''}`}
            onClick={() => onFilterClick('All')}
          >
            <ShoesAllIcon />
            <ShoesAllText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Men' ? 'active' : ''}`}
            onClick={() => onFilterClick('Men')}
          >
            <ShoesMenIcon />
            <ShoesMenText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Women' ? 'active' : ''}`}
            onClick={() => onFilterClick('Women')}
          >
            <ShoesWomenIcon />
            <ShoesWomenText />
          </div>
          <div
            className={`icon-text-pair ${activeFilter === 'Kids' ? 'active' : ''}`}
            onClick={() => onFilterClick('Kids')}
          >
            <ShoesKidsIcon />
            <ShoesKidsText />
          </div>
        </div>
        {activeFilter === 'All' && (
          <>
            <div className="product-group" onClick={handleProductSevenClick}>
              <ShoesProductImageOne />
              <ShoesProductTextOne />
              <ShoesProductOneIndividualPriceText />
              <div className="product-details-row">
                <ShoesProductOneSizesText />
                <div className="spacer" />
                <div onClick={handleJoinGroupClick}>
                  <JoinGroupButtonSeven />
                </div>
                <PriceDropdownButton 
                  onPriceDropdownClick={onPriceDropdownClick}
                  productName="Shoes Product One"
                  originalPrice="$129.99"
                  hasPendingRequest={priceDropdownProduct?.name === "Shoes Product One"}
                />
              </div>
              <div className="group-buy-row">
                <GroupBuyIconSeven />
                <ShoesProductOneGroupCondition />
              </div>
            </div>
            <div className="product-group" onClick={handleProductEightClick}>
              <ShoesProductImageTwo />
              <ShoesProductTextTwo />
              <ShoesProductTwoIndividualPriceText />
              <div className="product-details-row-two">
                <ShoesProductTwoColorsText />
                <div className="spacer" />
                <div onClick={handleJoinGroupClick}>
                  <JoinGroupButtonEight />
                </div>
                <PriceDropdownButton 
                  onPriceDropdownClick={onPriceDropdownClick}
                  productName="Shoes Product Two"
                  originalPrice="$159.99"
                  hasPendingRequest={priceDropdownProduct?.name === "Shoes Product Two"}
                />
              </div>
              <div className="group-buy-row-two">
                <GroupBuyIconEight />
                <ShoesProductTwoGroupCondition />
              </div>
            </div>
          </>
        )}
      </div>
      {showProductDetailSeven && <ProductDetailSeven onClose={handleCloseProductDetailSeven} />}
      {showProductDetailEight && <ProductDetailEight onClose={handleCloseProductDetailEight} />}
    </div>
  );
};

export default ShoesCard;