import React from 'react';
import Header from '../../components/Header';
import HomeBanner from '../shopping/HomeBanner';
import CategoryList from '../shopping/CategoryList';
import TabList from '../shopping/TabList';
import ProductSection from '../shopping/ProductSection';

function Home() {
  return (
    <div>
      <HomeBanner />
      <main className="max-w-7xl mx-auto px-4">
        <CategoryList />
        <ProductSection />
      </main>
    </div>
  );
}

export default Home;
