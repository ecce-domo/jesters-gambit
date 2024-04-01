import { useState } from 'react';
import './App.css';

const NumberButton = ({ number, get, set }) => (
  <button
    onClick={() => set(number)}
    className={get === number ? 'selected' : ''}
  >{number}</button>
);

const NameInput = ({ get, set }) => (
  <input value={get} onChange={e => set(e.target.value)} />
);

function App() {
  const [players, setPlayers] = useState(0);
  const [name0, setName0] = useState('Player 0');
  const [name1, setName1] = useState('Player 1');
  const [name2, setName2] = useState('Player 2');
  const [name3, setName3] = useState('Player 3');
  const [name4, setName4] = useState('Player 4');
  const [name5, setName5] = useState('Player 5');
  const names = [name0, name1, name2, name3, name4, name5];
  const setNames = [setName0, setName1, setName2, setName3, setName4, setName5];

  return (
    <>
      <h1><span className="wizard-blue">Wizard</span> <span className="wizard-red">Scorecard</span></h1>
      <div className="card">
        <h2>Select number of players:</h2>
        <div className="button-container">
          <NumberButton number={3} get={players} set={setPlayers} />
          <NumberButton number={4} get={players} set={setPlayers} />
          <NumberButton number={5} get={players} set={setPlayers} />
          <NumberButton number={6} get={players} set={setPlayers} />
        </div>
      </div>
      {players ? <>
        <div className="card">
          {
            Array.from({length: players}, (_, i) => <NameInput get={names[i]} set={setNames[i]} key={i} />)
          }
        </div>
        <button>Start</button>
      </> : <></>}
    </>
  )
};

export default App;
