import ProductList from "../components/ProductList";
import GenreMenu from "../components/GenreMenu";
import Cart from "../components/Cart";

const Shop = () => {
  return (
    <>
      <h2 className="shop-page-h2">Shop</h2>
      <div className="container">
        <GenreMenu />
        <ProductList />
        <Cart />
      </div>
    </>
  );
};

export default Shop;