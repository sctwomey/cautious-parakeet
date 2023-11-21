import RandomProductList from "../components/RandomProductList";
import ImageCard from '../components/ImageCard';
import ImageCard2 from '../components/ImageCard2';


const Home = () => {
  return (
    <div>
      <ImageCard />
      <div className="container">
        <RandomProductList />
      </div>
      <ImageCard2 />
    </div>
  );
};

export default Home;
