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

        {/* TabList와 ProductSection은 연동되어야 함 */}
        <TabList />
        <ProductSection />
      </main>
    </div>
  );
}

export default Home;
