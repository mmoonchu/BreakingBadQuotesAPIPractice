import React from 'react'
import { useState, useEffect } from 'react';

function RandomQuote() {
    const [_quote, setQuote] = useState('null');
    const getQuote = async() => {
        const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes')
        const data = await response.json();
        const quote1 = data[0];
        // console.log(data);
        setQuote(quote1);
    }
    
    useEffect(() => {
        getQuote();
    }, [])
    
    // function for post-loading
    const loaded = () => {
        return (
            <div>
                <h1> {_quote.author} </h1>
                <h2> {_quote.quote} </h2>
            </div>
        )
    }

    // function for when data doesn't exist yet
    const loading = () => {
        return <h1>Loading...</h1>;
    }
    
  return _quote && _quote.quote ? loaded() : loading();
}

export default RandomQuote