import clsx from 'clsx';
import React from 'react';
import { useAnalytics } from '../molecules';

export const Button = ({ onClick = (...params) => {} }): JSX.Element => {
  const { trackEvent } = useAnalytics();

  return (
    <button
      className={clsx('rounded-lg')}
      onClick={(...params) => {
        trackEvent('buttonClick', {
          label: 'button',
        });
        onClick(...params)
      }}
    >
      button
    </button>
  );
};

