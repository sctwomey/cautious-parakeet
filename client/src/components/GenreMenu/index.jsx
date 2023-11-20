import { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_GENRES,
  UPDATE_CURRENT_GENRE,
} from '../../utils/actions';
import { QUERY_GENRES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';

function GenreMenu() {
  const [state, dispatch] = useStoreContext();

  const { genres } = state;

  const { loading, data: genreData } = useQuery(QUERY_GENRES);

  useEffect(() => {
    if (genreData) {
      dispatch({
        type: UPDATE_GENRES,
        genres: genreData.genres,
      });
      genreData.genres.forEach((genre) => {
        idbPromise('genres', 'put', genre);
      });
    } else if (!loading) {
      idbPromise('genres', 'get').then((genres) => {
        dispatch({
          type: UPDATE_GENRES,
          genres: genres,
        });
      });
    }
  }, [genreData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_GENRE,
      currentGenre: id,
    });
  };

  return (
    <div className="genre-shop-page">
      <div className='row justify-content-center'>
        <h2 className="genre-h2">Explore Genres</h2>
        {genres.map((item) => (
          <button className="btn btn-genre"
            key={item._id}
            onClick={() => {
              handleClick(item._id);
            }}
          >
            {item.name}
          </button>
        ))}
        <button className="btn btn-genre mt-3"
          onClick={() => {
            handleClick('');
          }}
        >
          All Genres
        </button>
      </div>
    </div>
  );
}

export default GenreMenu;
