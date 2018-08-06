import React, { Component } from 'react';

import { Button } from '@blueprintjs/core';

import '@blueprintjs/core/lib/css/blueprint.css';


class LandingPage extends React.Component {
  state = {
    order: 1
  };

  nextPage = () => {
    this.setState((prevProps) => {
      return {
        order: this.state.order + 1
      }
    });
  };

  render() {
    const { children } = this.props;

    console.log(this.state.order);

    const selected = React.Children.toArray(children)[this.state.order].props.title;

    const headers = React.Children.map(children, (child) => {
      const { title } = child.props;
      return (<li 
        class="bp3-tab" 
        role="tab"
        aria-selected={selected === title}
      >{title}</li>);
    });

    const panels = React.Children.map(children, (child) => {
      const { title } = child.props;
      return React.cloneElement(
        child,
        { 'hidden': (title !== selected) },
      );
    });

    return (
      <div class="bp3-tabs">
        <ul class="bp3-tab-list .modifier" role="tablist">
          {headers}
        </ul>
        {panels}
        <Button onClick={this.nextPage}>Continue</Button>
      </div>      
    );
  }
}

const Step = (props) => {
  const {hidden} = props;
  return <div style={hidden ? {display: 'none'} : {}} class="bp3-tab-panel" role="tabpanel">
    {props.children}
  </div>
};

class App extends React.Component {
  render() {
    return (
      <LandingPage>
        <Step title="Name">
          <form>
            <input /> <label>First name</label>
            <input /> <label>Last name</label>
          </form>
        </Step>
        <Step title="Address">
          <form>
            <input /> <label>Address</label>
          </form>        
        </Step>
        <Step title="Age">
          <form>
            <input /> <label>Age</label>
          </form>
        </Step>
        <Step title="Favorite book">
          <form>
            <input /> <label>Favorite book</label>
          </form>        
        </Step>
      </LandingPage>
    );
  }
}


export default App;
