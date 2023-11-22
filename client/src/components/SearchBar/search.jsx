import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ARTIST } from '../../utils/queries';

const Search = ({ setArtist, value, setRunQuery }) => {
    const { loading, data, error } = useQuery(QUERY_ARTIST, {
        variables: { artist: value }
    });
    console.log(value);

    useEffect(() => {
        if (!loading) {
            // setRunQuery(false);
            console.log(error);
        }
    }, [loading])

    return <> </>
}

export default Search;