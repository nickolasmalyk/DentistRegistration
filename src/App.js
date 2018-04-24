import * as React from 'react';
import './App.css';

import Homepage from './components/pageBuilder/homepage';


class App extends React.Component {
  render() {
    return (
      <div className="app">
        <Homepage />
      </div>
    );
  }
};
export default App;
