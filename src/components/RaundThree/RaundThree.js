import robot from '../../img/robot.webp';
import Button from '../RaundOne/Button';
import styles from './RaundThree.module.sass';
import useSound from 'use-sound';
import soundButton from '../../sounds/soundButton.mp3';
import deadBot from '../../sounds/deadBot.mp3';
import lastTextBot from '../../sounds/lastTextBot.mp3';
import badRobot from '../../sounds/badRobotFinal.mp3';
import botMainText from '../../sounds/botMainText.mp3';
import badRobotMainText from '../../sounds/badRobotMainText.mp3';

function RaundThree({
  buttlePlusRaund,
  buttle,
  namePlayer,
  correctAnswer,
  plusAnswer,
  incorrectAnswer,
  playerPoints,
  raundPlus,
  badFinal,
  goodFinal,
}) {
  // Озвучка
  const [play] = useSound(soundButton);
  const [playBot] = useSound(deadBot);
  const [playText, { stop }] = useSound(lastTextBot);
  const [playBadRobot] = useSound(badRobot, { volume: 0.6 });
  const [playGoodText] = useSound(botMainText);
  const [playBadText] = useSound(badRobotMainText);

  const gameButton = () => {
    play();
  };

  const deadBots = () => {
    playBot();
  };

  const playTextBotOne = () => {
    playText();
  };

  const playTextBadRobot = () => {
    playBadRobot();
  };

  const goodText = () => {
    playGoodText();
  };

  const badText = () => {
    playBadText();
  };
  return (
    // То что говорит бот
    <div
      className={`${styles.backgraund} ${
        buttle >= 16 ? styles.backgraundTwo : ''
      }`}
    >
      <div className={styles.leftPart}>
        {(buttle === 1 && (
          <div className={styles.textBot}>
            <p>
              Так вот значит как он выглядит... Ого ! Ну да ладно, будем его
              побеждать, незнаю что он и кому доказывал, но явно не нам с тобой
              !
            </p>
          </div>
        )) ||
          (buttle === 3 && (
            <div className={styles.textBot}>
              <p>Это мы еще посмотрим...</p>
            </div>
          )) ||
          (buttle === 4 && (
            <div className={styles.textBotInGame}>
              <p>
                Как по мне совсем легкий вопрос, интересно они все такие
                будут...
              </p>
            </div>
          )) ||
          (buttle === 5 && plusAnswer[0] === true && (
            <div className={styles.textBot}>
              <p>Неплохо, я знал что ты справишься {namePlayer}</p>
            </div>
          )) ||
          (buttle === 5 && plusAnswer[0] === false && (
            <div className={styles.textBot}>
              <p>
                Давай же соберись {namePlayer}! Мы на первом вопросе проиграли !
              </p>
            </div>
          )) ||
          (buttle === 9 && plusAnswer[1] === true && (
            <div className={styles.textBot}>
              <p>ДА ! Ты просто молодец !</p>
            </div>
          )) ||
          (buttle === 9 && plusAnswer[1] === false && (
            <div className={styles.textBot}>
              <p>
                Ничего страшного, тебе просто нужно больше времени подумать...
              </p>
            </div>
          )) ||
          (buttle === 14 && (
            <div className={styles.textBotInGame}>
              <p>
                {namePlayer} соберись это 5 вопрос, ровно половина ! Мы ответили
                уже на 4, из которых{' '}
                {(playerPoints === 13 && '1') ||
                  (playerPoints === 26 && '2') ||
                  (playerPoints === 39 && '3') ||
                  (playerPoints === 52 && '4')}{' '}
                правильно, нам нужно выйграть !
              </p>
            </div>
          )) ||
          (buttle === 16 && (
            <div className={styles.textBotTwo}>
              <p>Что.. ЧТО ОН ДЕЛАЕТ ?!!!</p>
            </div>
          )) ||
          (buttle === 18 && (
            <div className={styles.textBotTwo}>
              <p>
                Так нужно взять себя в руки {namePlayer}. Я с тобой, и вместе у
                нас все получится !
              </p>
            </div>
          )) ||
          (buttle === 20 && (
            <div className={styles.textBotInGameTwo}>
              <p>
                Это же не честно ! Мы обречены... Хотя постой, кажется я знаю,
                типов данных всего 8. А 1000 - это 8 в двоичной системе
                счисления ! РИСКУЙ ! Просто доверься мне {namePlayer}!!!
              </p>
            </div>
          )) ||
          (buttle === 21 && plusAnswer[5] === true && (
            <div className={styles.textBotTwo}>
              <p>У НАС ПОЛУЧИЛОСЬ !</p>
            </div>
          )) ||
          (buttle === 21 && plusAnswer[5] === false && (
            <div className={styles.textBotTwo}>
              <p>
                Жаль что ты меня не послушал... Так мы проиграем {namePlayer},
                нам нужно быть командой !
              </p>
            </div>
          )) ||
          (buttle === 25 && (
            <div className={styles.textBotTwo}>
              <p>
                Мои датчики подсказывают мне, что приблежается что-то нехорошее,
                советую тебе найти систему перевода чисел десятеричной системы
                счисления в двоичную и как можно скорее!!!
              </p>
            </div>
          )) ||
          (buttle === 27 && (
            <div className={styles.textBotTwo}>
              <p>ААА ! Что происходит ?!!! ШшШ-...ПшшШ...шШ-ШкшШш...</p>
            </div>
          )) ||
          (buttle === 29 && (
            <div className={styles.textBotTwo}>
              <p>
                ШшШ-СлУшай...Ищи в интЕрнет...двоИчную-ЕЕЕ таблицу !ПшшШ...Он
                Играет...-т...-т... Нечестн...о
                шШ-ШкшШшПоЧти-ШшшшШш-Шшш-Побе...Шшшш-Кш-Шш...
              </p>
            </div>
          )) ||
          (buttle === 37 && (
            <div className={styles.textBotInGameTwo}>
              <p>ПшшШ...ЖМИ !!! ДАВАЙ ЖЕ ЖМИ !!!...Шшшш-Кш-Шш...</p>
            </div>
          ))}
        {/* Поля для игровых ответов и набора очков */}
        {(buttle === 4 && (
          <div className={styles.gameField}>
            <h2
              onClick={() => {
                incorrectAnswer();
                goodText();
              }}
              onMouseEnter={gameButton}
            >
              Открывающие
            </h2>
            <h2
              onClick={() => {
                correctAnswer();
                goodText();
              }}
              onMouseEnter={gameButton}
            >
              Тройные{' '}
            </h2>
            <h2
              onClick={() => {
                incorrectAnswer();
                goodText();
              }}
              onMouseEnter={gameButton}
            >
              Закрывающие
            </h2>
            <h2
              onClick={() => {
                incorrectAnswer();
                goodText();
              }}
              onMouseEnter={gameButton}
            >
              Одинарные
            </h2>
          </div>
        )) ||
          (buttle === 7 && (
            <div className={styles.gameField}>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                rem
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                em
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                px
              </h2>
              <h2
                onClick={() => {
                  correctAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                deg
              </h2>
            </div>
          )) ||
          (buttle === 10 && (
            <div className={styles.gameField}>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                Null
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                Number
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                Object
              </h2>
              <h2
                onClick={() => {
                  correctAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                Float
              </h2>
            </div>
          )) ||
          (buttle === 12 && (
            <div className={styles.gameField}>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                HTML
              </h2>
              <h2
                onClick={() => {
                  correctAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                Git
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                CSS
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                БЭМ
              </h2>
            </div>
          )) ||
          (buttle === 14 && (
            <div className={styles.gameField}>
              <h2
                onClick={() => {
                  correctAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                React Native
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                React Mobile
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                React Router
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                Mobile JS
              </h2>
            </div>
          )) ||
          (buttle === 20 && (
            <div className={styles.gameField}>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  goodText();
                }}
                onMouseEnter={gameButton}
              >
                0111
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  goodText();
                }}
                onMouseEnter={gameButton}
              >
                0000
              </h2>
              <h2
                onClick={() => {
                  correctAnswer();
                  goodText();
                }}
                onMouseEnter={gameButton}
              >
                1000
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  goodText();
                }}
                onMouseEnter={gameButton}
              >
                0010
              </h2>
            </div>
          )) ||
          (buttle === 23 && (
            <div className={styles.gameField}>
              <h2
                onClick={() => {
                  correctAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                object
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                array
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                undefined
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                boolean
              </h2>
            </div>
          )) ||
          (buttle === 31 && (
            <div className={styles.gameFieldFinal}>
              <h2
                onClick={() => {
                  correctAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                0000
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                1101
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                0011
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                1111
              </h2>
            </div>
          )) ||
          (buttle === 34 && (
            <div className={styles.gameFieldFinal}>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                1
              </h2>
              <h2
                onClick={() => {
                  correctAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                5
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                4
              </h2>
              <h2
                onClick={() => {
                  incorrectAnswer();
                  badText();
                }}
                onMouseEnter={gameButton}
              >
                null
              </h2>
            </div>
          )) ||
          (buttle === 37 && (
            <div className={styles.gameFieldFinal}>
              <h2
                onClick={() => {
                  correctAnswer();
                  stop();
                }}
                onMouseEnter={gameButton}
              >
                <span>1995</span>
              </h2>
              <h2
                onClick={() => {
                  correctAnswer();
                  stop();
                }}
                onMouseEnter={gameButton}
              >
                <span>1995</span>
              </h2>
              <h2
                onClick={() => {
                  correctAnswer();
                  stop();
                }}
                onMouseEnter={gameButton}
              >
                <span>1995</span>
              </h2>
              <h2
                onClick={() => {
                  correctAnswer();
                  stop();
                }}
                onMouseEnter={gameButton}
              >
                <span>1995</span>
              </h2>
            </div>
          ))}
        {/* Кнопка далее */}
        {(buttle === 0 && (
          <Button
            onClick={() => {
              buttlePlusRaund();
              goodText();
            }}
          >
            Дальше
          </Button>
        )) ||
          (buttle === 1 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                badText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 2 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                goodText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 3 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                goodText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 5 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                badText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 6 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                badText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 8 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                goodText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 9 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                badText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 11 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                badText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 13 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                goodText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 15 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                goodText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 16 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                badText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 17 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                goodText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 18 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                badText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 19 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                goodText();
              }}
            >
              Попробовать ответить
            </Button>
          )) ||
          (buttle === 21 && plusAnswer[5] === true && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                badText();
              }}
            >
              Поблагодарить Бота !
            </Button>
          )) ||
          (buttle === 21 && plusAnswer[5] === false && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                badText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 22 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                badText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 24 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                goodText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 25 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                badText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 26 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                playTextBotOne();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 27 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                deadBots();
                stop();
              }}
            >
              Связаться с ботом
            </Button>
          )) ||
          (buttle === 28 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                playTextBotOne();
              }}
            >
              Связаться с ботом
            </Button>
          )) ||
          (buttle === 29 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                stop();
                badText();
              }}
            >
              Вступить в финальную битву !
            </Button>
          )) ||
          (buttle === 30 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                playTextBadRobot();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 32 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                badText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 33 && playerPoints >= 78 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                badText();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 33 && playerPoints < 78 && (
            <Button
              onClick={() => {
                raundPlus();
                badText();
                badFinal();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 35 && playerPoints >= 91 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                badText();
              }}
            >
              Положить конец злу !
            </Button>
          )) ||
          (buttle === 35 && playerPoints < 91 && (
            <Button
              onClick={() => {
                raundPlus();
                badText();
                badFinal();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 36 && playerPoints >= 91 && (
            <Button
              onClick={() => {
                buttlePlusRaund();
                playTextBotOne();
              }}
            >
              Дальше
            </Button>
          )) ||
          (buttle === 38 && (
            <Button
              onClick={() => {
                raundPlus();
                goodFinal();
                goodText();
              }}
            >
              Дальше
            </Button>
          ))}
      </div>
      <div
        className={`${styles.rightPart} ${
          buttle >= 16 ? styles.rightPartTwo : ''
        } ${buttle >= 27 ? styles.rightPartFinal : ''} ${
          buttle === 38 ? styles.deadBoss : ''
        }`}
      >
        <img src={robot} alt="#" />
        {/* То что говорит злой дух компьютера */}
        {(buttle === 0 && (
          <div className={styles.textBadRobot}>
            Опять глупый бот и его столь же глупый хозяин. Cколько раз я уже
            доказывал Вам - человек глупее компьютера и никогда не сможет меня
            превзойти !
          </div>
        )) ||
          (buttle === 2 && (
            <div className={styles.textBadRobot}>
              Я уже устал давать всем Вам шанс, ДА НАЧНЕТСЯ ИГРА !!! Правила
              просты - ответить на мои вопросы правильно и набрать больше 100
              очков ! Это то, что вы никогда не сможете сделать !
            </div>
          )) ||
          (buttle === 4 && (
            <div className={styles.textBadRobot}>
              ПЕРВЫЙ ВОПРОС !!!
              <h3>Укажи каких из перичесленных тегов небывает в HTML ?</h3>
            </div>
          )) ||
          (buttle === 6 && plusAnswer[0] === true && (
            <div className={styles.textBadRobot}>
              Это вообще еще ничего не значит !
            </div>
          )) ||
          (buttle === 6 && plusAnswer[0] === false && (
            <div className={styles.textBadRobot}>
              Я же говорил ! Зря вы это затеяли, а это ведь еще только начало !
            </div>
          )) ||
          (buttle === 7 && (
            <div className={styles.textBadRobot}>
              ВОПРОС ВТОРОЙ !!!
              <h3>Какой единицы типографии нет в CSS ?</h3>
            </div>
          )) ||
          (buttle === 8 && plusAnswer[1] === true && (
            <div className={styles.textBadRobot}>
              Что ? КАК ? Ладно это просто случайность
            </div>
          )) ||
          (buttle === 8 && plusAnswer[1] === false && (
            <div className={styles.textBadRobot}>
              Да ты просто ничего не можешь !
            </div>
          )) ||
          (buttle === 10 && (
            <div className={styles.textBadRobot}>
              ВОПРОС ТРЕТИЙ !!!
              <h3>Какого типа данных нет в JavaScript ?</h3>
            </div>
          )) ||
          (buttle === 11 && plusAnswer[2] === true && (
            <div className={styles.textBadRobot}>
              Это был сложный вопрос, ты начинаешь меня ЗЛИТЬ !
            </div>
          )) ||
          (buttle === 11 && plusAnswer[2] === false && (
            <div className={styles.textBadRobot}>
              Как тебе мои вопросы ? Они все сложнее ! А ты все глупее ХА-ХА-ХА
              !
            </div>
          )) ||
          (buttle === 12 && (
            <div className={styles.textBadRobot}>
              ЧЕТВЕРТЫЙ ВОПРОС !!!
              <h3>
                Что из этого списка является Cистемой контроля версий (англ.
                Version Control System) ?
              </h3>
            </div>
          )) ||
          (buttle === 13 && plusAnswer[3] === true && (
            <div className={styles.textBadRobot}>
              Такого просто неможет быть !
            </div>
          )) ||
          (buttle === 13 && plusAnswer[3] === false && (
            <div className={styles.textBadRobot}>
              Не расстраивайся, я говорил сразу что тебе не победить !
            </div>
          )) ||
          (buttle === 14 && (
            <div className={styles.textBadRobot}>
              ПЯТЫЙ ВОПРОС !!!
              <h3>
                Как называется платформа для создания мобильных приложении на
                основе JavaScript (была создана facebook в 2015 году).
              </h3>
            </div>
          )) ||
          (buttle === 15 && playerPoints >= 39 && (
            <div className={styles.textBadRobot}>
              ТЫ СМОГ ПРОЙТИ ПОЛОВИНУ И ОТВЕТИТЬ НА ТАК МНОГО ВОПРОСОВ !!! Я
              буду играть по настоящему !!!
            </div>
          )) ||
          (buttle === 15 && playerPoints < 39 && (
            <div className={styles.textBadRobot}>
              Ты зашел далеко и я начинаю играть по настоящему !!!
            </div>
          )) ||
          (buttle === 17 && (
            <div className={styles.textBadRobot}>
              ВЫ ДУМАЛИ ВСЕ БУДЕТ ТАК ПРОСТО НЕ ТАК ЛИ ?!!! ТЕПЕРЬ МЫ БУДЕМ
              ИГРАТЬ ПО МОИ ПРАВИЛАМ !!!
            </div>
          )) ||
          (buttle === 19 && (
            <div className={styles.textBadRobot}>
              ШЕСТОЙ ВОПРОС !!!
              <h3>Сколько типов данных существует в JavaScript ?</h3>
            </div>
          )) ||
          (buttle === 20 && (
            <div className={styles.textBadRobot}>
              ШЕСТОЙ ВОПРОС !!!
              <h3>Сколько типов данных существует в JavaScript ?</h3>
            </div>
          )) ||
          (buttle === 22 && plusAnswer[5] === true && (
            <div className={styles.textBadRobot}>
              КАК ЭТО У ВАС ПОЛУЧИЛОСЬ ???!!! ВЫ ПЕРВЫЕ КТО СМОГ ОТВЕТИТЬ НА
              ЭТОТ ВОПРОС !!!
            </div>
          )) ||
          (buttle === 22 && plusAnswer[5] === false && (
            <div className={styles.textBadRobot}>
              ДААА !!! Вы не первые и не последние, как же мне нравится это с
              вами делать !
            </div>
          )) ||
          (buttle === 23 && (
            <div className={styles.textBadRobot}>
              ВОПРОС СЕДЬМОЙ !!!
              <h3>
                Что выведется в консоль, если ввести следующую команду -
                console.log(typeof null)
              </h3>
            </div>
          )) ||
          (buttle === 24 && plusAnswer[6] === true && (
            <div className={styles.textBadRobot}>
              НЕЗНАЮ КАК ТЫ ЭТО ДЕЛАЕШЬ... ЛАДНО ГОТОВЬСЯ К ПОРАЖЕНИЮ !
            </div>
          )) ||
          (buttle === 24 && plusAnswer[6] === false && (
            <div className={styles.textBadRobot}>
              ГОТОВЬСЯ К ПОРАЖЕНИЮ ! ГЛУПЫЙ ЧЕЛОВЕК !
            </div>
          )) ||
          (buttle === 26 && (
            <div className={styles.textBadRobot}>
              ЗАКРОЙ СВОЙ СКРИПУЧИЙ РЖАВЫЙ РОТ ЖЕЛЕЗЯКА !!! НАВСЕГДА !!!
            </div>
          )) ||
          (buttle === 28 && (
            <div className={styles.textBadRobot}>
              МОЖЕШЬ НЕ ПЫТАТЬСЯ !!! ЕМУ КОНЕЦ ! АХХАХАХА !!! А ТЕБЯ Я УНИЧТОЖУ
              С ЛЕГКОСТЬЮ !
            </div>
          )) ||
          (buttle === 30 && (
            <div className={styles.textBadRobot}>
              НУ ЧТО ПРИСТУПИМ, ПОСМОТРИМ КАК ТЫ БУДЕШЬ ИГРАТЬ БЕЗ СВОЕГО
              ЖЕСТЯНОГО ПОМОЩНИКА !!!
            </div>
          )) ||
          (buttle === 31 && (
            <div className={styles.textBadRobot}>
              ВОПРОС ВОСЬМОЙ !!!
              <h3>
                Дан массив строк - ['Bot', 'Human', 'BadRobot'], какой индекс
                будет у элемента 'Bot' ?
              </h3>
            </div>
          )) ||
          (buttle === 32 && plusAnswer[7] === true && (
            <div className={styles.textBadRobot}>
              ТЫ ДАЖЕ БЕЗ НЕГО СПРАВЛЯЕШЬСЯ !!! ЧТО ЭТОТ ГРЕБАННЫЙ БОТ ТЕБЕ
              НАПЛЕЛ ?!!! <span>0101001010-Ошибка системы-0100101010</span> ЧТО
              ?! ЧТО ПРОИСХОДИТ ?!!!
            </div>
          )) ||
          (buttle === 32 && plusAnswer[7] === false && (
            <div className={styles.textBadRobot}>
              ТЫ ПОСЛЕДУЕШЬ ЗА СВОИМ ЖЕСТЯНЫМ ДРУЖКОМ !!!
            </div>
          )) ||
          (buttle === 33 && plusAnswer[7] === true && playerPoints >= 78 && (
            <div className={styles.textBadRobot}>
              <span>0011101100101</span> БЫСТРЕЕ !!! <span>0100101010</span>{' '}
              БЫСТРЕЕ ! СЛЕДУЮЩИЙ ВОПРОС !!!
              <span> 01010100110 Проверка ошибок -4-0-4-</span>
            </div>
          )) ||
          (buttle === 33 && plusAnswer[7] === true && playerPoints < 78 && (
            <div className={styles.textBadRobot}>
              ТЫ ОТВЕТИЛ ВЕРНО,НО ДЛЯ ТЕБЯ ЭТО КОНЕЦ !!! ТЫ ОТВЕЧАЛ НА СЛИШКОМ
              МАЛО ВОПРОСОВ ПРАВИЛЬНО !!!
            </div>
          )) ||
          (buttle === 33 && plusAnswer[7] === false && (
            <div className={styles.textBadRobot}>ДЛЯ ТЕБЯ ЭТО КОНЕЦ !!!</div>
          )) ||
          (buttle === 34 && playerPoints >= 78 && (
            <div className={styles.textBadRobot}>
              ВОПРОС <span>0101001110</span> ДЕВЯТЫЙ !!!
              <h3>
                <span>Что выведет console.log(2 + 3) ?</span>
              </h3>
              НЕТ !!! НЕТ !!! ДРУГОЙ ВОПРОС !!! <span>01100101</span> ОН ЗНАЕТ
              ОТВЕТ, ЭТО СЛИШКОМ ЛЕГКО !!!{' '}
              <span>
                0100101 База данных "Злобные вопросы" пуста 01001001010{' '}
              </span>{' '}
              НЕ МОЖЕТ БЫТЬ !!!
            </div>
          )) ||
          (buttle === 35 && playerPoints >= 91 && (
            <div className={styles.textBadRobot}>
              <span>
                01001 Запрос база данных "Очень злобные вопросы" 0101001 -
                Осталось вопросов: (1){' '}
              </span>
              ДА !!! ЭТО ТО ЧТО НУЖНО !!! <span>010010110</span>
            </div>
          )) ||
          (buttle === 35 && playerPoints < 91 && (
            <div className={styles.textBadRobot}>НУ ВОТ И ВСЕ !!!</div>
          )) ||
          (buttle === 36 && (
            <div className={styles.textBadRobot}>
              ПОСЛЕДНИЙ ВОПРОС !!!
              <h3>
                <span>
                  01001 - В каком году был создан JavaScript ? -01-0011-
                </span>
              </h3>
              ЭТО ДАЖЕ БЛИЗКО НЕ СЛОЖНЫЙ ВОПРОС !!!{' '}
              <span>01001- Удаление памяти 010100</span> ЧТО ТЫ НАДЕЛАЛ ???!!!
              ЭТО ВСЕ ТВОЙ ГЛУПЫЙ БОТ !!! <span>0-1100-10101-</span>
            </div>
          )) ||
          (buttle === 37 && (
            <div className={styles.textBadRobot}>
              ПОСЛЕДНИЙ ВОПРОС !!!
              <h3>
                <span>
                  01001 - В каком году был создан JavaScript ? -01-0011-
                </span>
              </h3>
              ЭТО ДАЖЕ БЛИЗКО НЕ СЛОЖНЫЙ ВОПРОС !!!{' '}
              <span>01001- Удаление памяти 010100</span> ЧТО ТЫ НАДЕЛАЛ ???!!!
              ЭТО ВСЕ ТВОЙ ГЛУПЫЙ БОТ !!! <span>0-1100-10101-</span>
            </div>
          )) ||
          (buttle === 38 && (
            <div className={styles.textBadRobot}>
              <h3>
                <span>Персонаж "Злой компьютерный дух удален"</span>
              </h3>
            </div>
          ))}
      </div>
    </div>
  );
}

export default RaundThree;
