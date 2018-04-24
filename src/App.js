import * as React from 'react';
import './App.css';

import Homepage from './components/pageBuilder/homepage';

<<<<<<< HEAD

class App extends React.Component {
=======
  //hi

  getItems(){
    fetch('http://localhost:63234/api/Message/GetMessage/')
    .then(results => results.json())
    .then(results => this.setState({'items': results}));
  }
>>>>>>> b649648fc42bf5d6b8e55ffc83802ba04265da80
  render() {
    return (
      <div className="app">
        <Homepage />
      </div>
    );
  }
};
export default App;
