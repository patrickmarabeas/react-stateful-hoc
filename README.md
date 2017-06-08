# react-stateful-hoc

Higher Order Component for demoing stateless functional React components

## Demo Sandbox

[https://codesandbox.io/s/Mj5MMXG4R](https://codesandbox.io/s/Mj5MMXG4R)

## Usage

> npm i -D react-stateful-hoc

```
/** App */

import React from 'react';
import { render } from 'react-dom';
import StatefulHOC from 'react-stateful-hoc';
import { Clicker, onClickHandler, onClickHandlerAlternate } from 'Components/Clicker';

const ClickerMock = StatefulHOC(Clicker);

const ClickerDemo = ClickerMock({
  onClick(prop) {
    this.setState({ value: onClickHandler(this.value, prop) });
  },
});

// *** or ***

const ClickerDemo2 = ClickerMock({
  value: 0,
  onClick(prop) {
    this.setState((state, props) => ({
      value: onClickHandler(state.value, prop),
    }));
  },
});

// *** or ***

const ClickerDemo3 = ClickerMock({
  onClick(value) {
    this.setState(onClickHandlerAlternate(this, value));
  },
});

const App = () =>
  <div>
    <ClickerDemo />
    <ClickerDemo2 />
    <ClickerDemo3 />
  </div>;
render(<App />, document.getElementById('root'));

```

```
/** components/Clicker */

import React from 'react';
import propTypes from 'prop-types';

const Clicker = (props) => {
  const { value } = props; // event handlers will need to reference props directly to maintain scope
  return <div onClick={() => props.onClick(1)}>CLICK ME: {value}</div>;
};

Clicker.propTypes = {
  value: propTypes.number.isRequired,
  onClick: propTypes.func.isRequired
};

Clicker.defaultProps = {
  value: 0
};

function onClickHandler(state, payload) {
  return state += payload;
}

// *** or ***

function onClickHandlerAlternate(state, props) {
  return {
    value: state.value + props
  }
}

export { Clicker, onClickHandler, onClickHandlerAlternate };
```