import logo from './logo.svg';
import './App.css';
import Inlinecss from './type-css-add/Inlinecss';

function App() {
  return (
    <div className="App">
      <Inlinecss/>
      <div className="App-header">
        <div>
          <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRLemIGXJw2Tn2UcEc43fsOt2Xie23XD180BUCrQAw6AkQZ97Iy_BiQ4g2RK36mTdZqG4rRIg' alt='error' />
          <div>
            <h5>Tekken 8</h5>
            <p>Engage in fierce combat with legendary fighters, exploring new gameplay mechanics and intense rivalries in the latest installment of the iconic series.</p>
            <a href='#'>
              <span>buy now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
