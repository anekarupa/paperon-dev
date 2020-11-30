import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import theme from './ui/Theme'
import Header from './ui/Header'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={() => <div>Beranda</div> } />
          <Route exact path="/layanan" component={() => <div>Layanan</div> } />
          <Route exact path="/kuesioner" component={() => <div>Layanan - Kuesioner</div> } />
          <Route exact path="/monitoring" component={() => <div>Layanan - Monitoring</div> } />
          <Route exact path="/tentang" component={() => <div>Tentang</div> } />
          <Route exact path="/kontak" component={() => <div>Kontak</div> } />
          <Route exact path="/masuk" component={() => <div>Masuk</div> } />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}