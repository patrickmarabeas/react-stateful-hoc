/**
 * react-stateful-hoc v0.1.2
 * https://github.com/patrickmarabeas/react-stateful-hoc
 *
 * Copyright 2017, Patrick Marabeas http://marabeas.io
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 *
 * Date: 24/05/17
 */

import React from 'react';

export default StatelessComponent => (initialState = {}) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = typeof initialState === 'function' ? initialState(props) : initialState;
    this.setState = this.setState.bind(this);
  }
  render() {
    const { state, props, setState } = this;
    return <StatelessComponent {...props} {...state} setState={setState} />;
  }
};
