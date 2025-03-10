import logo from './logo.svg';
import './App.css';
import Expressoin from './practice/Expressoin';
import Dependence from './practice/dependence&Event';
import Navigationbar from './practice/Navigationbar';
import State from './practice/State';
import StateEx from './practice/State';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      {/* <State /> */}
      <StateEx />
      <Dependence />
      {/* <Expressoin />   */}
     
    </div>
  );
}

export default App;
