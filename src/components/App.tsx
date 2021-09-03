import React from 'react';
import logo from './logo.svg';
import Startpage from '../pages/StartPage';
import { Layout } from './Layout';
import { Router } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App;
