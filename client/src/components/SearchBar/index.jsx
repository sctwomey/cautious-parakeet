import { useState } from 'react';
import { QUERY_PRODUCTS } from '../../utils/queries';

function SearchBar() {
    // the value of the search field 
    const [title, setTitle] = useState('');

    // the search result
    const [foundProducts, setFoundProducts] = useState(QUERY_PRODUCTS);

    const filter = (e) => {
        const keyword = e.target.value;

        if (keyword !== '') {
            const results = QUERY_PRODUCTS.filter((item) => {
                return item.title.toLowerCase().startsWith(keyword.toLowerCase());
                // Use the toLowerCase() method to make it case-insensitive
            });
            setFoundProducts(results);
        } else {
            setFoundProducts(QUERY_PRODUCTS);
            // If the text field is empty, show all products
        }

        setTitle(keyword);
    };

    return (
        <div className="container">
            <input
                type="search"
                value={title}
                onChange={filter}
                className="input"
                placeholder="Filter"
            />

            <div className="user-list">
                {foundProducts && foundProducts.length > 0 ? (
                    foundProducts.map((item) => (
                        <li key={item.id} className="product-item">
                            <span className="user-id">{item.id}</span>
                            <span className="user-name">{item.title}</span>
                        </li>
                    ))
                ) : (
                    <h1>No results found!</h1>
                )}
            </div>
        </div>
    );
}

export default SearchBar;