import React from 'react';
import renderHydrogen from '@shopify/hydrogen/entry-server';
import {Router, FileRoutes, ShopifyProvider} from '@shopify/hydrogen';
import {Suspense} from 'react';
import Navbar from './components/Navbar';
function App() {
  return (
    <Suspense fallback={null}>
      <Navbar/>
      <ShopifyProvider >
        <Router>
          <FileRoutes className="bg-black"/>
        </Router>
      </ShopifyProvider>
    </Suspense>
  );
}

export default renderHydrogen(App);
