import Button from '../RaundOne/Button';
import Sound from '../Sound/Sound';
import styles from './Header.module.sass';

function Header({
  raund,
  raundPlus,
  raunMinus,
  newGame,
  playerPoints,
  infoPlayer,
  buttle,
  Click,
  volumePlus,
  volumeMinus,
  clickSound,
  stopFinalTheme,
}) {
  return (
    <div
      className={`${styles.header} ${
        buttle >= 27 ? styles.headerFinalButtle : ''
      } ${buttle >= 38 ? styles.headerFinal : ''}`}
    >
      {raund >= 3 ? (
        <div
          className={`${styles.playerInfo} ${
            buttle >= 27 ? styles.playerInfoFinalButtle : ''
          } ${buttle >= 38 ? styles.playerInfoFinal : ''}`}
        >
          {raund === 4 ? (
            <div className={styles.textBot}>
              Я кстати жив ! Думаешь кто помог тебе в конце а ?! Когда он меня
              отключил, а ты продолжил давать верные ответы - мои системы начали
              приходит в норму и я нашел его слабое место ! ЭТО БЫЛО ПОТРЯСНО
              !!!
            </div>
          ) : (
            <></>
          )}
          <img src={infoPlayer.avatar} alt="#" />
          <h3>
            {infoPlayer.first_name} {infoPlayer.last_name}
          </h3>
        </div>
      ) : (
        <></>
      )}
      {(raund === 3 && <h2>Очки: {playerPoints}</h2>) || (raund === 4 && <></>)}
      {(raund === 4 && <></>) || (
        <Sound
          clickSound={clickSound}
          Click={Click}
          volumePlus={volumePlus}
          volumeMinus={volumeMinus}
          className={styles.sound}
        />
      )}
      {/* <Button onClick={raundPlus}>Пойти дальше</Button> */}
      {raund === 2 ? (
        <Button onClick={raunMinus}>Вернуться и выбрать другово бота</Button>
      ) : (
        <></>
      )}
      {raund >= 3 ? (
        <Button
          onClick={() => {
            newGame();
            stopFinalTheme();
          }}
        >
          Начать игру заново
        </Button>
      ) : (
        <></>
      )}
      {raund === 1 ? (
        <Button onClick={newGame}>Вернуться к правилам</Button>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Header;
