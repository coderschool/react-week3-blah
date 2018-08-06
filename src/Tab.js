import React, { Component } from 'react';

const Tab = (props) => {  
  return (<div
    class="bp3-tab-panel"
    aria-hidden={props.hidden}
      >{props.children}
    }
    </div>);
}

export default Tab;