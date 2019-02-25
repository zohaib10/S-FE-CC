import {
  ADD_NODES,
  SORT_BY_NUMBER,
  SORT_BY_WEIGHT,
  SHOW_MORE_NODES
} from '../actions/types';

const initialState = { nodes: {}, numNodes: 30 };

const getWeights = nodes => {
  var obj = {};
  Object.entries(nodes).forEach(function(node) {
    var n = node[1];
    var keys = Object.keys(n);
    keys.forEach(function(key) {
      obj[key] = n[key];
    });
  });
  return obj;
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NODES:
      var val = 0;
      for (var key in action.nodes) {
        val++;
      }
      return {
        ...state,
        nodes: action.nodes,
        totalNodes: val
      };
    case SORT_BY_NUMBER:
      const keys = Object.keys(state.nodes);
      const sortedKeys = keys.sort(
        (a, b) =>
          parseInt(a.substring(4, a.length)) -
          parseInt(b.substring(4, b.length))
      );
      var sortedNodes = {};
      sortedKeys.forEach(function(node) {
        sortedNodes[node] = state.nodes[node];
      });
      return {
        ...state,
        nodes: sortedNodes,
        numNodes: 30
      };
    case SORT_BY_WEIGHT:
      //get weights of each node
      var weightsObject = getWeights(state.nodes);
      //sort by Weight
      var keys = Object.keys(weightsObject);
      var sortedKeys = keys.sort((a, b) => weightsObject[a] - weightsObject[b]);
      //get its corresponding nodes
      var sortedNodes = {};
      sortedKeys.forEach(function(node) {
        sortedNodes[node] = state.nodes[node];
      });
      return {
        ...state,
        nodes: sortedNodes,
        numNodes: 30
      };
    case SHOW_MORE_NODES:
      return {
        ...state,
        numNodes: state.numNodes + action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;
