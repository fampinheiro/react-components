import React, { Context, createContext, useContext } from 'react';

const Context = createContext({
  name: null,
  data: null
});
Context.displayName = 'Analytics context';

export const useAnalytics = () => {
  const { name: nameFromContext, data: dataFromContext } = useContext(Context);
  const trackEvent = (name, data) => {
    if (nameFromContext === null) {
      return;
    }

    console.log({
      event: [nameFromContext, name].join('.'),
      data: {
        ...dataFromContext,
        ...data
      }
    });
  };

  return {
    name: nameFromContext,
    data: dataFromContext,
    trackEvent,
  };
};

export const Analytics = ({ name, data, children }): JSX.Element => {
  const { name: nameFromContext, data: dataFromContext } = useAnalytics();

  const newProviderName = nameFromContext
    ? [nameFromContext, name].join('.')
    : name;

  return (
    <Context.Provider
      value={{
        name: newProviderName,
        data: {
          ...dataFromContext,
          ...data,
        },
      }}
    >
      {children}
    </Context.Provider>
  );
};
