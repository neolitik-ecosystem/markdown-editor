import React, { Component } from 'react';
import FilesExplorer from './views/explorer';
import ActionsMenu from './views/actions-menu';
import MarkDownEditor from './views/markdown/editor';
import MarkDownPreview from './views/markdown/preview';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='actions-menu' >
          <ActionsMenu />
        </div>
        <div className='files-explorer'>
          <FilesExplorer />
        </div>
        <div className='markdown-editor'>
          <MarkDownEditor />
        </div>
        <div className='markdown-preview'>
          <MarkDownPreview />
        </div>
      </div>
    );
  }
}

export default App;
