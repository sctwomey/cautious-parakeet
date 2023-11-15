// import ProductList from "../components/ProductList";
// import CategoryMenu from "../components/GenreMenu";
import Cart from "../components/Cart";
import RandomProductList from "../components/RandomProductList";

const Home = () => {
  return (
    <div className="container">
      {/* <GenreMenu /> */}
      <RandomProductList />
      <Cart />
    </div>
  );
};

export default Home;
