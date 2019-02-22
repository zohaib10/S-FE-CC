import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers/rootReducer';

import App from './Components/App';

const store = createStore(rootReducer);

const ComponentToRender = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

ReactDOM.render(<ComponentToRender />, document.getElementById('root'));
