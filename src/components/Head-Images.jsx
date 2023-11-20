import React from 'react';
import google from '../assets/images/google.png';
import linkedin from '../assets/images/linkedin.png';
import facebook from '../assets/images/facebook.png';
import instagram from '../assets/images/instagram.png';
import twitter from '../assets/images/twitter.png';

const ImageLink = ({ imageUrl, linkUrl, altText }) => {
  return (
    <a href={linkUrl} target="_blank" rel="noopener noreferrer">
      <img
        src={imageUrl}
        alt={altText}
        style={{
          width: '20px', 
          height: '20px', 
          borderRadius: '50%',
        }}
      />
    </a>
  );
};

export default function App() {
  return (
    <div>
      <ImageLink
        imageUrl={ google }
        linkUrl="https://google.com"
        altText="Google"
      />
      <ImageLink
        imageUrl={ linkedin }
        linkUrl="https://linkedIn.com"
        altText="LinkedIn"
      />
      <ImageLink
        imageUrl={ facebook }
        linkUrl="https://facebook.com" 
        altText="Facebook"
      />
      <ImageLink
        imageUrl={ instagram }
        linkUrl="https://instagram.com" 
        altText="Instagram"
      />
      <ImageLink
        imageUrl={ twitter }
        linkUrl="https://twitter.com" 
        altText="twitter"
      />

    </div>
  );
}