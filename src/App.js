import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TabList from './TabList';
import Tab from './Tab';

import { Button, Spinner } from '@blueprintjs/core';

import '@blueprintjs/core/lib/css/blueprint.css';


class MyTabList extends Component {
  render() {
    const { data, loading } = this.props;

    const tabs = data.map((d) => {
      return (
        <Tab title={d.title}>
          {d.body}
        </Tab>
      );
    });

    return (
      <TabList>
        {tabs}
      </TabList>
    );
  }
}

const withLoadingHandling = (WrappedComponent) => {
  return class extends React.Component {
    render () {
      const { loading, ...rest } = this.props;

      return loading ? 
        (<Spinner />) :
        (<WrappedComponent {...rest} />)
    }
  };
}

const WrappedTabList = withLoadingHandling(MyTabList);

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

export default App;
