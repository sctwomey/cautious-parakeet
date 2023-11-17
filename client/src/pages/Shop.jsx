import ProductList from "../components/ProductList";
import GenreMenu from "../components/GenreMenu";
import Cart from "../components/Cart";
// import RandomProductList from "../components/RandomProductList";

const Shop = () => {
  return (
    <div className="container">
          <GenreMenu />
          <ProductList />
          <Cart />
    </div>
  );
};

export default Shop;