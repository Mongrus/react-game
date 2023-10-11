import { useState, useEffect } from 'react';
import './App.sass';
import useSound from 'use-sound';
import RulesGame from './components/RulesGame/RulesGame';
import RaundOne from './components/RaundOne/RaundOne';
import RaundTwo from './components/RaundTwo/RaundTwo';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import RaundThree from './components/RaundThree/RaundThree';
import Final from './components/Final/Final';
import Loading from './components/Loading/Loading';
import badRobotMainText from './sounds/badRobotMainText.mp3';
import botMainText from './sounds/botMainText.mp3';
import sound from './sounds/sound.mp3';
import goodFinalSound from './sounds/goodFinal.mp3';
import badFinalSound from './sounds/badFinal.mp3';

function App() {
  const [raund, setRaund] = useState(0);
  const [infoPlayer, setInfoPlayer] = useState(null);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [textBot, setTextBot] = useState(0);
  const [namePlayer, setNamePlayer] = useState('');
  const [buttle, setButtle] = useState(0);
  const [plusAnswer, setPlusAnswer] = useState([]);
  const [playBadText] = useSound(badRobotMainText);
  const [playGoodText] = useSound(botMainText);
  const [clickSound, setClickSound] = useState(true);
  const [volume, setVolume] = useState(0.3);
  const [loading, setLoading] = useState(false);
  const [play, { stop: stopSound }] = useSound(sound, {
    volume,
  });
  const [playGoodFinal, { stop: stopGoodFinal }] = useSound(goodFinalSound, {
    volume,
  });
  const [playbadFinal, { stop: stopbadFinal }] = useSound(badFinalSound, {
    volume,
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 15000);
  }, []);

  const twoRaundStart = (...info) => {
    const infoPlayer = {
      id: info[0],
      first_name: info[1],
      last_name: info[2],
      avatar: info[3],
      gender: info[4],
    };
    setInfoPlayer(infoPlayer);
    setRaund(raund + 1);
  };

  const raundPlus = () => {
    setRaund(raund + 1);
  };

  const raunMinus = () => {
    setRaund(raund - 1);
    if (raund <= 0) {
      setRaund(0);
    }
    if (textBot >= 1) {
      setTextBot(0);
    }
  };

  const newGame = () => {
    setRaund(0);
    setPlayerPoints(0);
    setTextBot(0);
    setNamePlayer('');
    setButtle(0);
    setPlusAnswer([]);
  };

  const startThreeRaund = () => {
    setTextBot(textBot + 1);
    if (textBot === 1) {
      setRaund(raund + 1);
      badText();
    } else if (textBot === 0) {
      playGoodText();
    }
  };

  const checkName = () => {
    if (namePlayer !== '' && !namePlayer.trim().length !== true) {
      raundPlus();
    }
  };

  const buttlePlusRaund = () => {
    setButtle(buttle + 1);
  };

  const correctAnswer = () => {
    setPlayerPoints(playerPoints + 13);
    setButtle(buttle + 1);
    plusAnswer.push(true);
  };

  const incorrectAnswer = () => {
    setButtle(buttle + 1);
    plusAnswer.push(false);
  };

  const badText = () => {
    playBadText();
  };

  const Click = () => {
    setClickSound(!clickSound);
    if (clickSound === true) {
      play();
    } else if (clickSound === false) {
      stopSound();
    }
  };

  const newGameClick = () => {
    if (clickSound === true) {
      setClickSound(false);
      play();
    }
  };

  const volumePlus = () => {
    setVolume(volume + 0.1);
    if (volume === 0.9) {
      setVolume(0.9);
    }
  };
  const volumeMinus = () => {
    setVolume(volume - 0.1);
    if (volume === 0) {
      setVolume(0);
    }
  };

  const badFinal = () => {
    stopSound();
    playbadFinal();
  };

  const goodFinal = () => {
    stopSound();
    playGoodFinal();
    playGoodText();
  };

  const stopFinalTheme = () => {
    stopGoodFinal();
    stopbadFinal();
    stopSound();
  };

  return (
    <div className="App">
      <Header
        Click={Click}
        volumePlus={volumePlus}
        volumeMinus={volumeMinus}
        clickSound={clickSound}
        buttle={buttle}
        raund={raund}
        raundPlus={raundPlus}
        raunMinus={raunMinus}
        newGame={newGame}
        playerPoints={playerPoints}
        infoPlayer={infoPlayer}
        stopFinalTheme={stopFinalTheme}
      />
      {loading ? (
        <Loading />
      ) : (
        (raund === 0 && (
          <RulesGame
            newGameClick={newGameClick}
            checkName={checkName}
            setNamePlayer={setNamePlayer}
            raundPlus={raundPlus}
          ></RulesGame>
        )) ||
        (raund === 1 && <RaundOne twoRaundStart={twoRaundStart} />) ||
        (raund === 2 && (
          <RaundTwo
            namePlayer={namePlayer}
            startThreeRaund={startThreeRaund}
            textBot={textBot}
            infoPlayer={infoPlayer}
          />
        )) ||
        (raund === 3 && (
          <RaundThree
            raundPlus={raundPlus}
            playerPoints={playerPoints}
            incorrectAnswer={incorrectAnswer}
            plusAnswer={plusAnswer}
            correctAnswer={correctAnswer}
            buttlePlusRaund={buttlePlusRaund}
            buttle={buttle}
            namePlayer={namePlayer}
            badFinal={badFinal}
            goodFinal={goodFinal}
          />
        )) ||
        (raund === 4 && (
          <Final
            buttle={buttle}
            namePlayer={namePlayer}
            infoPlayer={infoPlayer}
            playerPoints={playerPoints}
          />
        ))
      )}

      <Footer buttle={buttle} />
    </div>
  );
}

export default App;
