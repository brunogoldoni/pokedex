import React, {useState, useEffect, createContext, useContext} from 'react';
import Alert from '../../components/Alert';

const AlertContext = createContext({});

const AlertProvider = ({children}) => {
  const [alert, setAlert] = useState({});
  const [alertType, setAlertType] = useState('');
  const [reference, setReference] = useState(null);
  const AlertService = {
    error,
    success,
    warning,
  };

  function error(message, interval = 4000) {
    setAlertType('error');
    if (reference && reference.current !== null) {
      setAlert({});
      reference.current.alertWithType('error', '', message, null, interval);
    } else {
      setAlert({
        type: 'error',
        message,
        interval: interval ? interval : 4000,
      });
    }
  }

  function success(message, interval = 4000) {
    setAlertType('success');
    if (reference && reference.current !== null) {
      setAlert({});
      reference.current.alertWithType('success', '', message, null, interval);
    } else {
      setAlert({
        type: 'success',
        message,
        interval: interval ? interval : 4000,
      });
    }
  }

  function warning(message, interval = 4000) {
    setAlertType('warn');
    if (reference && reference.current !== null) {
      setAlert({});
      reference.current.alertWithType('warn', '', message, null, interval);
    } else {
      setAlert({
        type: 'warn',
        message,
        interval: interval ? interval : 4000,
      });
    }
  }

  useEffect(() => {
    if (Object.keys(alert).length > 0 && reference) {
      switch (alert.type) {
        case 'error':
          error(alert.message, alert.interval);
          break;
        case 'success':
          success(alert.message, alert.interval);
          break;
        case 'warn':
          warning(alert.message, alert.interval);
          break;
      }
    }
  }, [alert, reference]);

  return (
    <AlertContext.Provider value={{AlertService}}>
      <Alert type={alertType} getRef={setReference} />
      {children}
    </AlertContext.Provider>
  );
};

const useAlert = () => {
  const context = useContext(AlertContext);
  return context;
};

export {AlertProvider, useAlert};
