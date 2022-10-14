import React from 'react';
import BasicFooter from './headersAndFooters/BasicFooter'; 


const Footer = () => {

  const footerElements = {
      brands: ['BrandName'],
      pages: ['Company', 'About'],
    };

  return(
    <BasicFooter  basicFooterElements={footerElements} />
  );
  
}

export default Footer;