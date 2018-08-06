import React, { Component } from 'react';

import TabList from './TabList';
import Tab from './Tab';

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