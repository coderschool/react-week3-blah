import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TabList from './TabList';
import Tab from './Tab';

import '@blueprintjs/core/lib/css/blueprint.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <TabList>
          <Tab title="Selected tab">
            Selected panel
          </Tab>
          <Tab title="Another tab">
            Another panel
          </Tab>
          <Tab title="Disabled tab">
            Another another panel
          </Tab>
        </TabList>
      </div>
    );
  }
}

export default App;
