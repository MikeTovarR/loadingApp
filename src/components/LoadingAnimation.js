import React from 'react';
import './LoadingAnimation.css';

const LoadingAnimation = () => {
  return (
    <div className="loading-animation">
      <div>
      <div className="spinner"></div>
        <p className='loading_text'>loading ...</p></div>
    </div>
  );
};

export default LoadingAnimation;