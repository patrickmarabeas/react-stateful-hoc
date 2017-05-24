# react-stateful-hoc

Higher Order Component for demoing stateless functional React components

## Usage

> npm i -D react-stateful-hoc

```
/** App */

import React from 'react';
import StatefulHOC from 'react-stateful-hoc';
import { Clicker, onClickHandler } from 'components/Clicker';

const ClickerMock = StatefulHOC(Clicker);

const ClickerDemo = ClickerMock({
  onClick(prop) {
    this.setState({ value: onClickHandler(this.value, prop) });
  }
});

const App = () => <ClickerDemo />;
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
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

Clicker.defaultProps = {
  value: 0
};

function onClickHandler(state, payload) {
  return state += payload;
}

export { Clicker, onClickHandler };
```