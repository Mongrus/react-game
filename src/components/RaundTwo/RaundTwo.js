import Button from '../RaundOne/Button';
import styles from './RaundTwo.module.sass';

function RaundTwo({ infoPlayer, startThreeRaund, textBot, namePlayer }) {
  const randNum = Math.floor(Math.random() * 5) + 1;

  return (
    <div className={styles.raundTwo}>
      <div className={styles.userInfo}>
        {(textBot === 1 && randNum === 1 && (
          <div className={styles.textBot}>
            <p>
              Давай сразимся с ним вместе {namePlayer} ! Ты главное не волнуйся
              и говори мне что делать...
            </p>
          </div>
        )) ||
          (textBot === 1 && randNum === 2 && (
            <div className={styles.textBot}>
              <p>
                Что-то я побаиваюсь этого злового духа... Надеюсь {namePlayer}{' '}
                ты знаешь что делаешь !
              </p>
            </div>
          )) ||
          (textBot === 1 && randNum === 3 && (
            <div className={styles.textBot}>
              <p>
                Да ему никогда с нами не справиться {namePlayer} ! Пусть даже не
                мечтает !
              </p>
            </div>
          )) ||
          (textBot === 1 && randNum === 4 && (
            <div className={styles.textBot}>
              <p>
                Тааак... тут надо хорошенько подумать {namePlayer}, оценим свои
                силы и вперед !
              </p>
            </div>
          )) ||
          (textBot === 1 && randNum === 5 && (
            <div className={styles.textBot}>
              <p>
                Среди наших про него много говорят {namePlayer}, давай уже
                наконец посмотрим на эту гадину !
              </p>
            </div>
          ))}

        <img src={infoPlayer.avatar} alt="#" />
        <h3>
          {infoPlayer.first_name} {infoPlayer.last_name}
        </h3>
        <h4>{infoPlayer.gender}</h4>
        <p>
          Это бот, которого ты выбрал(а). Он будет представлять тебя в битве со
          злым компьютерным духом! Выбрать этого бота и начать игру ?
        </p>
        <Button onClick={startThreeRaund}>Бот готов !!!</Button>
      </div>
    </div>
  );
}

export default RaundTwo;
