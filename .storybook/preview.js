import Center from "../src/Components/Center/Center"
import React from 'react';
import {addDecorator} from '@storybook/react';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(story => <Center>{story()}</Center>)