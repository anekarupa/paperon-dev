import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';

import theme from './ui/Theme'
import Header from './ui/Header'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Hello Paperon Dev
    </ThemeProvider>
  );
}