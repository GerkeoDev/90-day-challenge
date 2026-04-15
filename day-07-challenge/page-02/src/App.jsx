import logo from './logo.svg';
import './App.css';
import Tabs from './components/Tabs';
import FilterComponent from './components/FilterComponent';
import MapComponent from './components/MapComponent';
import ReduceComponent from './components/ReduceComponent';

function App() {
  const tabs = [{label: 'Filter', component: FilterComponent}, {label: 'Map', component: MapComponent}, {label: 'Reduce', component: ReduceComponent}];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Tabs tabs={tabs}/>
    </div>
  );
}

export default App;
