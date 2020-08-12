import React from 'react';

export default ({onClick, children}) => (
    <button 
        className="btn"
        onClick={onClick}>
        {children}
    </button>
)