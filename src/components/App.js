import React, { Component } from 'react';
import Header from '../components/Header';
import Section from '../components/Section';
import Main from '../components/Main';
import Footer from '../components/Footer';

class App extends Component {
/**
 * Render
 *
 * @returns {view}
 */
  render() {
    return (
      <div className="App" >
        <div className="wrapper">
          <Header />
          <Section />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}

export default (App);
