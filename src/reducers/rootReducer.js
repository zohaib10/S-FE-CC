const initialState = { nodes: {} };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NODES':
      console.log('Here', action.nodes);
      return {
        ...state,
        nodes: action.nodes
      };
      break;
    default:
      return state;
  }
};

export default rootReducer;
