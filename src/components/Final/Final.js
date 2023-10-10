import styles from './Final.module.sass';

function Final({ buttle, namePlayer, infoPlayer, playerPoints }) {
  console.log(buttle);
  return (
    <div>
      {buttle === 38 ? (
        <div className={styles.goodFinal}>
          <div className={styles.goodFinalDiv}>
            <div className={styles.textBot}>
              Я кстати жив ! Думаешь кто помог тебе в конце а ?! Когда он меня
              отключил, а ты продолжил давать верные ответы - мои системы начали
              приходит в норму и я нашел его слабое место ! ЭТО БЫЛО ПОТРЯСНО
              !!!
            </div>
            <h2>
              Победа была одержана {namePlayer} ! ПОЗДРАВЛЯЮ !!! Количество
              набранных тобой очков: {playerPoints}. Этого хватило что бы
              победить злового духа компьютера, да и {infoPlayer.first_name}{' '}
              {infoPlayer.last_name} кажется в порядке. В общем это
              действительно хорошая концовка, спасибо тебе за игру ! Надеюсь она
              тебе хоть немного понравилась, я очень старался.
            </h2>
          </div>
        </div>
      ) : (
        <div className={styles.badFinal}>
          <div className={styles.badFinalDiv}>
            <h2>
              К сожалению ты проиграл {namePlayer}... Человечество было
              уничтожено армией машин, которую возглавил злой дух компьютера...
              Твой бот {infoPlayer.first_name} {infoPlayer.last_name} погиб...
              НО ! Не стоит отчаиваться. Ведь это всего лишь игра и у нее есть
              другая концовка, просто пройди ее заново и будь внимательнее
              отвечая на вопросы. Удачи ! И до встречи в хорошей концовке !!!
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}

export default Final;
