import { useState } from 'react';
import { useLocation } from 'wouter';
import './App.css';
import { connect } from 'react-redux';
import { setPlayerNames } from './actions/players';
import { setPlayerQty } from './actions/numberOfPlayers';
import { setInitialDealer } from './actions/initialDealer';
import { incrementRound } from './actions/round';
import { setPhaseToTrump } from './actions/phase';

const App = connect(
  ({ players, numberOfPlayers }) => ({ players, playerQty: numberOfPlayers }),
  ({ setPlayerNames, setPlayerQty, setInitialDealer, incrementRound, setPhaseToTrump })
)(
  ({ players, playerQty, setPlayerNames, setPlayerQty, setInitialDealer, incrementRound, setPhaseToTrump }) => {
    const [name0, setName0] = useState('Player 0');
    const [name1, setName1] = useState('Player 1');
    const [name2, setName2] = useState('Player 2');
    const [name3, setName3] = useState('Player 3');
    const [name4, setName4] = useState('Player 4');
    const [name5, setName5] = useState('Player 5');
    const names = [name0, name1, name2, name3, name4, name5];
    const setNames = [setName0, setName1, setName2, setName3, setName4, setName5];
    const [location, navigate] = useLocation();

  return (
    <>
      <h1><span className="wizard-blue">Wizard</span> <span className="wizard-red">Scorecard</span></h1>
      <div className="card">
        <h2>Select number of players:</h2>
        <div className="button-container">
          {
            Array.from({length: 4}, (_, i) => (
            <button
              onClick={() => setPlayerQty(3+i)}
              className={playerQty === (3+i) ? 'selected' : ''}
              key={i}
            >{3+i}</button>
            ))
          }
        </div>
      </div>
      {playerQty ? <>
        <div className="card">
          {
              players.slice(0, playerQty).map((name, i) => (
                <input
                  onChange={e => setNames[i](e.target.value)}
                  value={names[i]}
                  key={i}
                />
              ))
          }
        </div>
        <button
          onClick={(e) => {
            setPlayerNames(names.slice(0, playerQty));
            setInitialDealer(Math.floor(playerQty * Math.random()));
            incrementRound();
            setPhaseToTrump();
            navigate('/game');
          }}
        >Start</button>
      </> : <></>}
    </>
  )
});

export default (App);
