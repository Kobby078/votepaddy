import React from 'react';
import '../styles/styles.css';
import ImageLink  from '../components/Head-Images'

const Headers = () => {



  return (
    <header className="header">
      <div className="header-text">
        Choose Votepaddy - Where Every Vote Matters | Call Us: +233 222222222
      </div>
      <div className="social-media-icons">
        <ImageLink />
        
      </div>
    </header>
  );
};

export default Headers;
