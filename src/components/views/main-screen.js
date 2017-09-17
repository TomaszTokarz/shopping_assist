import React, { Component } from 'react';

import TitleBar from '../title-bar';
import Login from '../login';
import Footer from '../footer';

export default class MainScreen extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <Login />
        <Footer />
      </div>
    );
  }
}
