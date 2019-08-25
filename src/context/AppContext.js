import React, { useReducer } from 'react';
import PropTypes from 'prop-types';

import VetLoader from '../components/shared/VetLoader';

const initialState = {
  isLoadding: false,
};

const AppContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_LOADDING':
      return { ...state, isLoadding: action.payload };
    default:
      return state;
  }
};

const AppContextProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(reducer, initialState);
  const value = { appState, appDispatch };

  return (
    <AppContext.Provider value={value}>
      {children}
      {appState.isLoadding && <VetLoader />}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

const AppContextConsumer = AppContext.Consumer;

export { AppContext, AppContextProvider, AppContextConsumer };
