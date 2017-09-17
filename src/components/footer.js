import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer__bar">
        <span>Created by </span>
        <a className="footer__bar__link" href='http://tomasztokarz.com'>Tomasz Tokarz</a>
      </div>
    );
  }
}
