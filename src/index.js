
import React from 'react';
import ReactDOM from 'react-dom';
import Label from './components/atoms/Label';
import Button from './components/atoms/Button';

const render = (container, Comp, props) => {
  ReactDOM.render(<Comp {...props} />, container);
};

window.miro = {
  label: (container, props) => render(container, Label, props),
  button: (container, props) => render(container, Button, props)
};