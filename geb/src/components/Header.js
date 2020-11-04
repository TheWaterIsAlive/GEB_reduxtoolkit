/**
 *
 * Header
 *
 */

import React from 'react';
import Logo from './Logo';
import Banner from './Banner';
import Router from './Router';

function Header() {
  return (
    <div>
      <div>
        <Logo />
        <Banner />
      </div>
      <div>
        <Router />
      </div>
    </div>
  );
}


export default Header;
