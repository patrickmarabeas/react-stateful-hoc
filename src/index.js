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
