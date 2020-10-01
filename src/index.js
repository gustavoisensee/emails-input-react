
import React from 'react';
import ReactDOM from 'react-dom';
import Button from './components/atoms/Button';
import Email from './components/atoms/Email';
import EmailContainer from './components/atoms/EmailContainer';
import Text from './components/atoms/Text';
import Input from './components/atoms/Input';

const render = (container, Comp, props) => {
  ReactDOM.render(<Comp {...props} />, container);
};

window.miro = {
  button: (container, props) => render(container, Button, props),
  email: (container, props) => render(container, Email, props),
  emailContainer: (container, props) => render(container, EmailContainer, props),
  text: (container, props) => render(container, Text, props),
  input: (container, props) => render(container, Input, props),
};