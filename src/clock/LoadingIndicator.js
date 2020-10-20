import React from 'react';

const LoadingIndicator = ({ color, size }) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
       
    </div>
);

LoadingIndicator.defaultProps = {
    color: 'orangered',
    size: 45,
};

export default LoadingIndicator;
