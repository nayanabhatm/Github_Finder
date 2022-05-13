import React, { createContext, useEffect, useReducer } from 'react';
import alertReducer from './AlertReducer';

const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, null);

  const showAlert = (msg, type) => {
    dispatch({ type: 'SHOW_ALERT', payload: { msg, type } });

    setTimeout(() => {
      dispatch({ type: 'REMOVE_ALERT' });
    }, 3000);
  };

  useEffect(() => {
    dispatch('SHOW_ALERT');
  });

  return (
    <AlertContext.Provider value={{ alert: state, showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
