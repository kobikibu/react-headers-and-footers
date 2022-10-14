import React from 'react';
/* import ResponsiveHeader from './headersAndFooters/ResponsiveHeader';*/ 
/* import BasicHeader from './headersAndFooters/BasicHeader';*/ 
import ResponsiveHeader from './headersAndFooters/ResponsiveHeader';


const Header = () => {

  const headerElements = {
      brands: ['BrandName'],
      pages: ['Company', 'About'],
      settings : ['Profile', 'Account', 'Dashboard', 'Logout'],
    };
    {/* <BasicHeader basicHeaderElements={HeaderElements} /> */}
    {/* <ResponsiveHeader ResponsiveHeaderElements={HeaderElements} /> */}
  return(
    <ResponsiveHeader responsiveHeaderElements={headerElements} />
  );

}

export default Header;