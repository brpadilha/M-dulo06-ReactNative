import React, {Component} from 'react';
import {StatusBar} from 'react-native'
import './config/ReactotronConfig'

import Routes from './routes'

export default function App() {
  return (
    <>
    <StatusBar barStyle="light-content" backgroundColor="#1b8de5"></StatusBar>
     {/*configura status bar do android*/}
    <Routes />
    </>
  );
}
