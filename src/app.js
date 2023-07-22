import { hot } from 'react-hot-loader/root';
import React from 'react';
import Title from './title';

const title = 'React with Webpack and Babel';

function App() {
  return (
    <div>
      <Title text={title} />
    </div>
  );
}

export default hot(App);