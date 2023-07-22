import 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom/client';

const title = 'React с Webpack и Babel!';

import App from './app'; 


const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(<h1>{title}</h1>); 