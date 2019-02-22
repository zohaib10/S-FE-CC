import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

class DisplayNodes extends Component {
  static propTypes = {
    nodes: PropTypes.object.isRequired
  };

  render() {
    const allNodes = Object.entries(this.props.nodes);
    // console.log(allNodes);
    return (
      <div className="container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Node</th>
              <th>Edge</th>
              <th>Edge</th>
              <th>Edge</th>
              <th>Edge</th>
              <th>Edge</th>
              <th>Edge</th>
              <th>Edge</th>
              <th>Edge</th>
              <th>Edge</th>
              <th>Edge</th>
              <th>Edge</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {allNodes.map(node => {
              return (
                <tr key={node[0]}>
                  <td>{node[0]}</td>
                  {Object.entries(node[1]).map(node => {
                    return (
                      <Fragment>
                        <td>{node[0]}</td>
                      </Fragment>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    nodes: state.nodes
  };
};

export default connect(mapStateToProps)(DisplayNodes);
