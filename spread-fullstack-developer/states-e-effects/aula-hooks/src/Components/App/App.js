import './App.css';
import Counter from '../Counter/Counter';
import SmartCounter from '../SmartCounter/SmartCounter';
import IfoodCounter from '../IfoodCounter/IfoodCounter';

function App() {
  return (
    <>
      <h1 id='texto-ifood'>Ifood :)</h1>
     <SmartCounter />
     <IfoodCounter />
    </>
  );
}

export default App;
