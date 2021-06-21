import React from 'react';

import './error-indicator.css';
import icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="Error icon" />
            <span className="boom">BOOM!</span>
            <span>Something has gone terribly wrong</span>
            <span>(but we already sent drons to fix it)</span>
        </div>
    )
}

export default ErrorIndicator;
