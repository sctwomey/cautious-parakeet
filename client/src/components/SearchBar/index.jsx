import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ARTIST } from '../../utils/queries';
import styles from './SearchBar.module.css';
import Search from './search.jsx';

function SearchBar() {

    const [value, setValue] = useState(''); // Here we'll store the value of the search bar's text input
    const [artist, setArtist] = useState([]);
    const [runQuery, setRunQuery] = useState(false);
    //const { artist, error } = useQuery(QUERY_ARTIST);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(value);
        if (value !== "")
            setRunQuery(true)
        // try {
        //     const queryResponse = await artist({
        //         variables: { value },
        //     });
        //     console.log(queryResponse);

        // } catch (event) {
        //     console.log('error', event);
        // }
    };

    return (
        <>
            <div className={styles.container}>
                <input
                    type="text"
                    className={styles.textbox}
                    placeholder="Search for vinyls..."
                    value={value}
                    onChange={(event) => {
                        setValue(event.target.value);
                    }}
                />
                <div className="flex-row justify-content-center">
                    <button onClick={handleSubmit} type="submit">Submit</button>
                </div>
            </div>
            {runQuery && <Search setArtist={setArtist} value={value} setRunQuery={setRunQuery} />}
        </>
    );
};

export default SearchBar;