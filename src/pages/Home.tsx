import HomeCategories from "../components/HomeCategories";
import HomeCarousel from "../components/HomeCarousel";
import HomeProducts from "../components/HomeProducts";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="px-4">
        <HomeCarousel />
        <HomeCategories />
        <HomeProducts />
        <Categories />
      </main>
      <footer className="px-4">
        <Footer />
      </footer>
    </>
  );
}
