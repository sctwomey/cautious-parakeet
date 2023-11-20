import { useEffect, useState } from 'react';
import RandomProductItem from '../RandomProductItem';
import { useStoreContext } from '../../utils/GlobalState';
import { UPDATE_PRODUCTS } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { QUERY_PRODUCTS } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import spinner from '../../assets/spinner.gif';
import { FaAlignCenter } from 'react-icons/fa';

function RandomProducts() {
  const [state, dispatch] = useStoreContext();
  const [randomProducts, setRandomProducts] = useState([]);

  const { currentCategory } = state;

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  useEffect(() => {
    if (data) {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) => {
        idbPromise('products', 'put', product);
      });
    } else if (!loading) {
      idbPromise('products', 'get').then((products) => {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  useEffect(() => {
    if (state.products.length > 0) {
      const randomSubset = state.products
        .sort(() => Math.random() - 0.5)
        .slice(0, 4);

      setRandomProducts(randomSubset);
    }
  }, [state.products]);

  // console.log(randomProducts);

  return (
    <div className="my-2">
      <h2>Some Vinyls to Explore</h2>
      {randomProducts.length ? (
        <div className="flex-row">
          {randomProducts.map((product) => (
            <RandomProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              title={product.title}
            />
          ))}
        </div>
      ) : (
        <h3>No Products In The Cart, Yet!</h3>
      )}
      {loading ? <img src={spinner} alt="loading" /> : null}
    </div>
  );
}

export default RandomProducts;
