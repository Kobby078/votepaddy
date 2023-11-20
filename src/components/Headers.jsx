import React from 'react';
import '../styles/styles.css';
import ImageLink  from '../components/Head-Images'
import DateComponent from './DateComponent';

const Headers = () => {



  return (
    <header className="header">
      <div className="flexStart header-text">
          <span>
            <DateComponent />
          </span>
          <span>
            <button className="h-button">
              <a href="http://">
                Choose Votepaddy - Where Every Vote Matters 
              </a>
            </button>
          </span>
          <span className="flexCenter">
           Call Us: +233 222222222
          </span>
      </div>
      <div className="social-media-icons">
        <ImageLink />
        
      </div>
    </header>
  );
};

export default Headers;
