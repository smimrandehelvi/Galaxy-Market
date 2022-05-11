import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ScrollToTop from './ScrollToTop';
import { MoralisProvider } from "react-moralis";


ReactDOM.render(
  <BrowserRouter >
    <ScrollToTop />
    <MoralisProvider appId="cg083RyJzWvVbLtyQ7WxQpfAyIICON4AN8MGSxqe" serverUrl="https://btbpgajnttxt.usemoralis.com:2053/server">
    <App />
    </MoralisProvider>,
  </BrowserRouter>,
  document.getElementById('root')
);
