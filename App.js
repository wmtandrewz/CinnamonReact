import React from 'react';
import CinnamonApp from './src/CinnamonApp';
import Store from './src/store';
import { Provider } from 'react-redux';

export default class App extends React.Component {

  render() {
    this.props.hideNavBar;
    return (
      <Provider store={Store}>
        <CinnamonApp />
      </Provider>

    );
  }
}

