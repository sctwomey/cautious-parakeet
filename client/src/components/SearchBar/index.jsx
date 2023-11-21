import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ARTIST } from '../../utils/queries';
import styles from './SearchBar.module.css';

function SearchBar() {

    const [value, setValue] = useState(''); // Here we'll store the value of the search bar's text input
    const [artist, { error }] = useQuery(QUERY_ARTIST);

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(value);
        try {
            const queryResponse = await artist({
                variables: { value },
            });
            console.log(queryResponse);

        } catch (e) {
            console.log('error', e);
        }
    };

    return (
        <>
            <div className={styles.container}>
                <input
                    type="text"
                    className={styles.textbox}
                    placeholder="Search for vinyls..."
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                />
                <div className="flex-row justify-content-center">
                    <button onClick={handleSubmit} type="submit">Submit</button>
                </div>
            </div>
        </>
    );
};

export default SearchBar;