import HomeBanner from '../Shopping/HomeBanner';
import ProductSection from '../Shopping/ProductSection';

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
