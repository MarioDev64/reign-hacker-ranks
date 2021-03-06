import React from 'react';
import syled from 'styled-components';

const LoadingSpinnerStyle = syled.div`
display: inline-block;
width: 80px;
height: 80px;
&:after {
    content: " ";
    display: block;
    width: 84px;
    height: 84px;
    margin: 8px;
    border-radius: 50%;
    border: 6px solid #fdd;
    border-color: #fdd transparent #fdd transparent;
    animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const LoadingSpinner = () => <LoadingSpinnerStyle />;

export default LoadingSpinner;
