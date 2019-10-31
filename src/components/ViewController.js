import React, { useState } from 'react';
import Home from 'components/home/Home';

const viewMap = {
  home: Home,
  car: () => <p>Car</p>
};

const set = (setter, value) => {
  setter(value);
}

const ViewController = (props) => {
  const [view, setView] = useState('home');
  const View = viewMap[view];
  return (
    <View />
  );
}

export default ViewController;