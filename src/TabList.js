import React, { Component } from 'react';


export default class TabList extends React.Component {

  state = {
    selected: null
  };

  selectTitle = (title) => {
    this.setState({
      selected: title
    });
  };

  render() {
    const { children } = this.props;

    const selected = this.state.selected || React.Children.toArray(children)[0].props.title;

    const headers = React.Children.map(children, (child) => {
      const { title } = child.props;
      return (<li 
        class="bp3-tab" 
        role="tab"
        aria-selected={selected === title}
        onClick={() => {
          this.selectTitle(title);
        }}
      >{child.props.title}</li>);
    });

    const panels = React.Children.map(children, (child) => {
      const { title } = child.props;
      return React.cloneElement(
        child,
        { hidden: (title !== selected) },
      );
    });

    return (
      <div class="bp3-tabs">
          <ul class="bp3-tab-list" 
            role="tablist">
            {headers}
          </ul>
          {panels}
      </div>
    );
  }
}