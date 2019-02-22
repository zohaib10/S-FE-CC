import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getNodes } from '../scripts/script.js';
import DisplayNodes from './DisplayNodes';

class App extends Component {
  componentDidMount() {
    const nodes = getNodes();
    this.props.addNodes(nodes);
  }
  render() {
    return (
      <div>
        <DisplayNodes />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNodes: nodes => {
      // console.log('Nodes', nodes);
      dispatch({
        type: 'ADD_NODES',
        nodes
      });
    }
  };
};

export default connect(null, mapDispatchToProps)(App);
