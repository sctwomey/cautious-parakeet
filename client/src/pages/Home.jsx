import ProductList from "../components/ProductList";
// import GenreMenu from "../components/GenreMenu";
import Cart from "../components/Cart";
import RandomProductList from "../components/RandomProductList";

const Home = () => {
  return (
    <div>
    <div className="container">
          {/* <GenreMenu /> */}
          <RandomProductList />
          <Cart />
    </div>
    </div>
  );
};

export default Home;
