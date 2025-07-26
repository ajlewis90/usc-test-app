import React, { useState, useRef } from 'react';
import './VirtualTryOnModal.css';

const VirtualTryOnModal = ({ product, onClose, onAddToCart }) => {
  const [modalState, setModalState] = useState('upload'); // 'upload' | 'processing' | 'results'
  const [tryOnResults, setTryOnResults] = useState([]);
  const [currentResultIndex, setCurrentResultIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileSelect = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      alert('File size must be less than 10MB');
      return;
    }

    setModalState('processing');

    // Simulate processing time (2 seconds) without backend
    setTimeout(() => {
      // Generate demo try-on results based on product category
      const getDemoResults = () => {
        const productName = product.name.toLowerCase();
        
        if (productName.includes('dress')) {
          return [
            'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Person wearing dress - front view
            'https://images.unsplash.com/photo-1566479179817-c4c0dedd4cec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Person wearing dress - side view
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80'  // Person wearing dress - back view
          ];
        } else if (productName.includes('shirt') || productName.includes('blouse')) {
          return [
            'https://images.unsplash.com/photo-1556821840-3a9c6dcdb815?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Person wearing white shirt - front view
            'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Person wearing white shirt - side view
            'https://images.unsplash.com/photo-1607345366928-199ea26cfe3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80'  // Person wearing white shirt - back view
          ];
        } else if (productName.includes('jeans') || productName.includes('pants') || productName.includes('trousers')) {
          return [
            'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Person wearing jeans - front view
            'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Person wearing jeans - side view
            'https://images.unsplash.com/photo-1603400521630-9f2de124b33b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80'  // Person wearing jeans - back view
          ];
        } else if (productName.includes('tank') || productName.includes('sleeveless')) {
          return [
            'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Tank top front view
            'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Tank top side view
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80'  // Tank top back view
          ];
        } else if (productName.includes('suit') || productName.includes('business') || productName.includes('executive')) {
          // Detect if it's men's or women's suit based on product name
          const isMensSuit = productName.includes('navy') || productName.includes('black') || productName.includes('charcoal') || 
                           productName.includes('executive') && !productName.includes('blazer');
          
          if (isMensSuit) {
            // Men's suits - show first 3 images
            return [
              '/business-suits/man-suit-1.png', // Man in navy business suit
              '/business-suits/man-suit-2.png', // Man in black business suit
              '/business-suits/man-suit-3.png'  // Smart Asian man in suit
            ];
          } else {
            // Women's suits - show last 2 images
            return [
              '/business-suits/woman-suit-1.png', // Woman in business shirt
              '/business-suits/woman-suit-2.png'  // Woman in suit
            ];
          }
        } else if (productName.includes('underwear') || productName.includes('brief')) {
          return [
            'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Underwear front view
            'https://images.unsplash.com/photo-1506629905723-21f05ff4649e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Underwear side view
            'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80'  // Underwear back view
          ];
        } else if (productName.includes('lingerie') || productName.includes('bralette') || productName.includes('camisole')) {
          return [
            'https://images.unsplash.com/photo-1571513722275-4b41940f54b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Lingerie front view
            'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Lingerie side view
            'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80'  // Lingerie back view
          ];
        } else if (productName.includes('shorts')) {
          return [
            'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Shorts front view
            'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Shorts side view
            'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80'  // Shorts back view
          ];
        } else if (productName.includes('hoodie') || productName.includes('sweatshirt')) {
          return [
            'https://images.unsplash.com/photo-1556821840-3a9c6dcdb815?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Hoodie front view
            'https://images.unsplash.com/photo-1571945153237-4929e783af4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80', // Hoodie side view
            'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600&q=80'  // Hoodie back view
          ];
        } else if (productName.includes('tank') || productName.includes('sleeveless')) {
          return [
            'https://assets.api.uizard.io/api/cdn/stream/1bd902b0-209c-4d5f-8e63-99d55c9016ba.png',
            'https://assets.api.uizard.io/api/cdn/stream/fecff665-0ba6-4922-888b-84d485e1e917.png',
            'https://assets.api.uizard.io/api/cdn/stream/d20da14a-9c71-4b23-9104-66542fb7ab2b.png'
          ];
        }
        
        // Default demo results
        return [
          'https://images.unsplash.com/photo-1566479179817-c4c0dedd4cec?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600',
          'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600',
          'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600'
        ];
      };

      setTryOnResults(getDemoResults());
      setModalState('results');
    }, 2000);
  };

  const handleTryAgain = () => {
    setModalState('upload');
    setTryOnResults([]);
    setCurrentResultIndex(0);
  };

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product);
    }
    onClose();
  };

  const nextResult = () => {
    setCurrentResultIndex((prev) => 
      prev < tryOnResults.length - 1 ? prev + 1 : 0
    );
  };

  const prevResult = () => {
    setCurrentResultIndex((prev) => 
      prev > 0 ? prev - 1 : tryOnResults.length - 1
    );
  };

  // Touch handlers for swipe navigation
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextResult();
    } else if (isRightSwipe) {
      prevResult();
    }
  };

  return (
    <div className="try-on-modal-overlay" onClick={onClose}>
      <div className="try-on-modal" onClick={(e) => e.stopPropagation()}>
        <div className="try-on-modal-header">
          <h2>Virtual Try-On</h2>
          <button className="try-on-close-button" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="try-on-modal-content">
          {modalState === 'upload' && (
            <div className="upload-section">
              <div className="product-preview">
                <img src={product.image || product.imageUrl} alt={product.name} />
                <div className="product-details">
                  <h3>{product.name}</h3>
                  <p className="price">{product.price}</p>
                </div>
              </div>
              
              <div className="upload-area">
                <div className="upload-icon">📷</div>
                <p>Upload your photo to try on this item</p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  style={{ display: 'none' }}
                />
                <button 
                  className="upload-button"
                  onClick={() => fileInputRef.current?.click()}
                >
                  Choose Photo
                </button>
              </div>
            </div>
          )}

          {modalState === 'processing' && (
            <div className="processing-section">
              <div className="processing-spinner"></div>
              <h3>Creating your virtual try-on...</h3>
              <p>This may take a few moments</p>
            </div>
          )}

          {modalState === 'results' && (
            <div className="results-section">
              <div className="results-header">
                <h3>Your Virtual Try-On Results</h3>
                <div className="result-counter">
                  {currentResultIndex + 1} of {tryOnResults.length}
                </div>
              </div>
              
              <div className="result-image-container"
                   onTouchStart={handleTouchStart}
                   onTouchMove={handleTouchMove}
                   onTouchEnd={handleTouchEnd}>
                <img 
                  src={tryOnResults[currentResultIndex]} 
                  alt="Try-on result"
                  className="result-image"
                />
                
                {tryOnResults.length > 1 && (
                  <>
                    <button className="nav-button prev" onClick={prevResult}>
                      ‹
                    </button>
                    <button className="nav-button next" onClick={nextResult}>
                      ›
                    </button>
                  </>
                )}
              </div>

              <div className="results-actions">
                <button className="try-again-button" onClick={handleTryAgain}>
                  🔄 Try Again
                </button>
                <button className="add-to-cart-button" onClick={handleAddToCart}>
                  🛒 Add to Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VirtualTryOnModal;