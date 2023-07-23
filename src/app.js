import { hot } from 'react-hot-loader/root';
import React from 'react';
import Title from './title';
import DangerText from './dangerText';
import MyImage from './assets/images/dog.jpg';

const title = 'React with Webpack and Babel !';

function App() {
  return (
    <div>
      <Title text={title} />
      <DangerText text={title} />
      <img src={MyImage} alt="torchlight in the sky" />
    </div>
  );
}

export default hot(App);