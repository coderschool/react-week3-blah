import React, { Component } from 'react';

import { Button } from '@blueprintjs/core';

class App extends Component {

  state = {
    data: [
      {title: 'Selected tab', body: 'I wuz selected'},
      {title: 'Another tab', body: 'another tab'},
      {title: 'Another another tab', body: 'fail'},
    ],
    loading: false
  };

  fetchData = () => {

    this.setState({loading: true}, () => {
      window.setTimeout(() => {
        this.setState({
          data: [
            {title: 'New tab', body: 'I feel reborn'},
            {title: 'Another new tab', body: 'another tab'},
            {title: 'New new tab', body: 'fail'}
          ],
          loading: false
        });
      }, 2000);
    });
  };

  render() {
    return (
      <div className="App">
        <WrappedTabList
          data={this.state.data}
          loading={this.state.loading}
        />
        <Button icon="add" onClick={this.fetchData}>
          Kick off
        </Button>
      </div>
    );
  }
}
