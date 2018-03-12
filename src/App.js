import React, { Component } from 'react';
import Explorer from './views/explorer';
import ActionsMenu from './views/actions-menu';
import MarkDownEditor from './views/markdown/editor';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ActionsMenu />
        <Explorer />
        <MarkDownEditor />
      </div>
    );
  }
}

/*
<Explorer />
<Document />
<Preview />
*/

export default App;
