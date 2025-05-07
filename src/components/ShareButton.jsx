// src/components/ShareButton.jsx
import React from 'react';
import shareIcon from '../assets/share-icon.png'; // Import the image from src/assets
import './ShareButton.css';

const ShareButton = ({ shareText, shareTitle }) => {
  const handleShare = () => {
    const shareUrl = window.location.href;
    if (navigator.share) {
      navigator.share({
        title: shareTitle,
        text: shareText,
        url: shareUrl,
      }).catch((error) => console.log('Error sharing:', error));
    } else {
      alert('Share functionality is not supported on this device. You can copy the URL: ' + shareUrl);
    }
  };

  return (
    <button className="share-button" onClick={handleShare}>
      <img src={shareIcon} alt="Share Icon" className="share-icon" />
    </button>
  );
};

export default ShareButton;