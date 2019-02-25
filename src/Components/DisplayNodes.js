import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { sortBy, showMoreNodes } from '../actions/sortActions';

class DisplayNodes extends Component {
  state = {
    sortBy: 'Unsorted'
  };

  static propTypes = {
    nodes: PropTypes.object.isRequired
  };
  //Adds the scroll event listener
  componentDidMount() {
    document.addEventListener('scroll', this.trackScrolling);
  }
  //removed the scroll listener
  componentWillUnmount() {
    document.removeEventListener('scroll', this.trackScrolling);
  }
  //to see if we are at the botoom
  isBottom(el) {
    return el.getBoundingClientRect().bottom <= window.innerHeight;
  }
  // Function to track scroller
  trackScrolling = () => {
    const wrappedElement = document.getElementById('header');
    if (this.isBottom(wrappedElement)) {
      if (this.props.numNodes + 15 <= this.props.totalNodes) {
        this.props.showMoreNodes(15);
      } else if (this.props.totalNodes - this.props.numNodes > 0) {
        this.props.showMoreNodes(this.props.totalNodes - this.props.numNodes);
      }
    }
  };
  //handles click on dropdown options
  handleClick = e => {
    this.setState(
      { sortBy: [e.target.name] },
      this.props.sortBy(e.target.name)
    );
  };
  //renders the dropdown menu and the table
  render() {
    const allNodes = Object.entries(this.props.nodes);
    // console.log(allNodes);
    return (
      <div className="container" id="header">
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
//Maps state from the redux store to props
const mapStateToProps = state => {
  //dummy node because the object was giving a wierd error
  var allNodes = {
    fakeNode: {
      node71: 12,
      node72: 93
    }
  };
  var allofnodes = state.nodes;
  var val = 0;
  for (var key in allofnodes) {
    if (val === state.numNodes) {
      break;
    }
    allNodes[key] = allofnodes[key];
    val++;
  }
  delete allNodes['fakeNode'];
  return {
    nodes: allNodes,
    numNodes: state.numNodes,
    totalNodes: state.totalNodes
  };
};
//maps the two actions to our props
const mapDispatchToProps = dispatch => {
  return {
    sortBy: method => {
      dispatch(sortBy(method));
    },
    showMoreNodes: num => {
      dispatch(showMoreNodes(num));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayNodes);
