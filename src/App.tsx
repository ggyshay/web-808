import * as React from 'react';
import { TransportComponent } from './components/transport.component';
import './App.css';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <TransportComponent />
      </div>
    );
  }
}

export default App;
