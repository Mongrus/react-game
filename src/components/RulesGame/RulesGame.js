import Button from '../RaundOne/Button';
import styles from './RulesGame.module.sass';

function RulesGame({ raundPlus, setNamePlayer, checkName, newGameClick }) {
  return (
    <div className={styles.backgraund}>
      <div className={styles.rules}>
        <h2>Добро пожаловать !!!</h2>
        <input
          type="text"
          placeholder="Укажи пожалуйста свое имя"
          onChange={(e) => setNamePlayer(e.target.value)}
          pattern="[\w]{1,15}"
          maxLength="10"
          required
        ></input>
        <p>Это обязательное поле (не более 10 символов)</p>
        <h3>
          В этой игре ты должен(а) проверить себя на прочность сразившись со
          злым компьютерным духом. Сам(а) ты этого сделать не можешь так как дух
          сидит в компьютере, а ты при всем желании туда не залезешь... Но ты
          можешь выбрать бота помощника... Да да!!! Именно его! И он поможет
          тебе в битве со злодеем! Просто дай все правильные ответы на вопросы
          которые злой дух тебе задаст, он этого очень не любит. Твоя задача
          набрать в течении 10 вопросов как можно больше очков. Ладно давай так,
          четкая цель в 100 очков и ты его победил. Удачи !
          <p>
            <br></br>
            Отключите пожалуйста Google Translate (переводчик страницы), либо
            выставьте значение языка - Английский. Иначе текст может
            отображаться некорректно !
          </p>
        </h3>
        <Button
          onClick={() => {
            checkName();
            newGameClick();
          }}
        >
          Если ты готов(а) ЖМИ!!!
        </Button>
      </div>
    </div>
  );
}

export default RulesGame;
