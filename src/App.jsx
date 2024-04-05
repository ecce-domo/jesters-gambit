import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPlayerNames } from './redux/playerSlice';
import { useLocation } from 'wouter';
import './App.css';

const App = () => {
  const [players, setPlayers] = useState(0);
  const [name0, setName0] = useState('Player 0');
  const [name1, setName1] = useState('Player 1');
  const [name2, setName2] = useState('Player 2');
  const [name3, setName3] = useState('Player 3');
  const [name4, setName4] = useState('Player 4');
  const [name5, setName5] = useState('Player 5');
  const names = [name0, name1, name2, name3, name4, name5];
  const setNames = [setName0, setName1, setName2, setName3, setName4, setName5];
  const [location, navigate] = useLocation();

  const playersRedux = useSelector(state => state.players);
  const dispatch = useDispatch();

  return (
    <>
      <h1><span className="wizard-blue">Wizard</span> <span className="wizard-red">Scorecard</span></h1>
      <div className="card">
        <h2>Select number of players:</h2>
        <div className="button-container">
          {
            Array.from({length: 4}, (_, i) => (
            <button
              onClick={() => setPlayers(3+i)}
              className={players === (3+i) ? 'selected' : ''}
              key={i}
            >{3+i}</button>
            ))
          }
        </div>
      </div>
      {players ? <>
        <div className="card">
          {
              names.slice(0, players).map((_, i) => (
                <input
                  onChange={e => setNames[i](e.target.value)}
                  value={names[i]}
                  key={i}
                />
              ))
          }
        </div>
        <button
          onClick={() => {
            dispatch(setPlayerNames(names.slice(0, players)))
            navigate('/game');
          }}
        >Start</button>
      </> : <></>}
    </>
  )
};

export default App;
