import React from 'react';
import { Analytics, Button } from '@fampinheiro/react-components';

export default {
  title: 'Atoms/Analytics',
  component: Analytics,
};

export const Simple = (args) => (
  <Analytics name="root">
    <Button {...args} />
  </Analytics>
);

export const Nested = (args) => (
  <Analytics name="root" data={{
    root: true
  }}>
    <Button {...args} />
    <Analytics name="node" data={{
      node: true
    }}>
      <Button {...args} />
    </Analytics>
  </Analytics>
);
