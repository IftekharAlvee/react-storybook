import Center from "../src/Components/Center/Center"
import React from 'react';
import {addDecorator} from '@storybook/react';
import { ChakraProvider, theme, CSSReset, Box } from "@chakra-ui/react"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(story => 
  <ChakraProvider theme={theme}>
      <CSSReset />
      <Box m="5">{story()}</Box>
  </ChakraProvider>)