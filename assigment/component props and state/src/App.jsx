import './App.css';
import Classcomponents from './component/Classcomponents';
import Loginbtn from './component/Conditional Rendering/Loginbtn';
import VoteEligibility from './component/Conditional Rendering/VoteEligibility';
import CreatForm from './component/Forms in React/CreatForm';
import Functioncomponents from './component/Functioncomponents';
import HandlingEvents from './component/Handling Events/HandlingEvents';
import RendersList from './component/Lists and Keys/RendersList';
import Props from './component/props and state/Props';
import Usingstate from './component/props and state/Usingstate';


function App() {

  return (
    <>
      <Functioncomponents name="Akram" />
      <Classcomponents name="Akram"/>
      <Props name="Monty" age="38" location="surat"/>
      <Usingstate />
      <HandlingEvents />
      <Loginbtn />
      <VoteEligibility />
      <RendersList />
      <CreatForm />
    </>
  );
}

export default App;
