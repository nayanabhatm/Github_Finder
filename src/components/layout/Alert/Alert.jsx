import React, { useContext } from 'react';
import AlertContext from '../../../context/Alert/AlertContext';
import './Alert.scss';

function Alert() {
  const { alert } = useContext(AlertContext);

  return <div className={`${alert.type}`}>{alert.msg}</div>;
}

export default Alert;
