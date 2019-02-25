import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { sortBy } from '../actions/sortActions';

class DisplayNodes extends Component {
  state = {
    sortBy: 'Unsorted'
  };

  static propTypes = {
    nodes: PropTypes.object.isRequired
  };

  handleClick = e => {
    this.setState(
      { sortBy: [e.target.name] },
      this.props.sortBy(e.target.name)
    );
  };

  render() {
    const allNodes = Object.entries(this.props.nodes);
    // console.log(allNodes);
    return (
      <div className="container">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenu2"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            style={{ marginTop: 10, marginBottom: 10 }}
          >
            {this.state.sortBy}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button
              className="dropdown-item"
              type="button"
              name="By Node Number"
              onClick={this.handleClick}
            >
              By Node Number
            </button>
            <button
              className="dropdown-item"
              type="button"
              name="By Node Weight"
              onClick={this.handleClick}
            >
              By Node Weight
            </button>
          </div>
        </div>
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

const mapDispatchToProps = dispatch => {
  return {
    sortBy: method => {
      dispatch(sortBy(method));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayNodes);
