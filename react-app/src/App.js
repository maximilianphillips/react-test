import './App.css';
import Time from './components/Time';
import Metrics from './components/Metrics';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="left">
          <Time/>
        </div>
        <div className="right">
          <Metrics/>
        </div>
      </header>
    </div>
  );
}

export default App;
