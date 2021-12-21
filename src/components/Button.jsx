import React from 'react';
import './Button.css';

const Button = ({ children, onClick }) => {
    return ( 
        <div className="button-container">
            <button onClick={onClick} className='button'>{children}</button>
        </div>
     );
}
 
export default Button;