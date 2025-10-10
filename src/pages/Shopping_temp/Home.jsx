import HomeBanner from '../shopping/HomeBanner';
import ProductSection from '../shopping/ProductSection';

function Home() {
  return (
    <div>
      <HomeBanner />
      <main className="max-w-7xl mx-auto px-4">
        <ProductSection />
      </main>
    </div>
  );
}

export default Home;
