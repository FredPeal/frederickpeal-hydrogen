import React from "react";
import renderHydrogen from "@shopify/hydrogen/entry-server";
import { Router, FileRoutes, ShopifyProvider } from "@shopify/hydrogen";
import { Suspense } from "react";
import Navbar from "./components/Navbar";
import "./output.css";
function App() {
  return (
    <Suspense fallback={null}>
      <div className="container mx-auto">
        <Navbar />
        <ShopifyProvider>
          <Router>
            <FileRoutes className="bg-black" />
          </Router>
        </ShopifyProvider>
      </div>
    </Suspense>
  );
}

export default renderHydrogen(App);
