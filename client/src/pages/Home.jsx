import ProductList from "../components/ProductList";
// import GenreMenu from "../components/GenreMenu";
import Cart from "../components/Cart";
import RandomProductList from "../components/RandomProductList";
import ImageCard from '../components/ImageCard';
import ImageCard2 from '../components/ImageCard2';


const Home = () => {
  return (
    <div>
               <ImageCard />
    <div className="container">
          {/* <GenreMenu /> */}
 
          <RandomProductList />
          {/* <Cart /> */}
    </div>
    <ImageCard2 />
    </div>
  );
};

export default Home;
