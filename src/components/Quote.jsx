import React from 'react';
import './Quote.css';

const Quote = ({ children }) => {
    return ( 
        <div className="quote-container">
            <h2 className='quote'>{ children }</h2>
        </div>
     );
}
 
export default Quote;