import { FiVolume2, FiVolumeX } from 'react-icons/fi';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import styles from './Sound.module.sass';

const Sound = ({ volumePlus, volumeMinus, Click, clickSound }) => {
  return (
    <button className={styles.button}>
      <span role="img" aria-label="trumpet">
        <AiOutlineMinus className={styles.plusAndMinus} onClick={volumeMinus} />
        {(clickSound === true && (
          <FiVolumeX className={styles.icons} onClick={Click} />
        )) ||
          (clickSound === false && (
            <FiVolume2 className={styles.icons} onClick={Click} />
          ))}
        <AiOutlinePlus className={styles.plusAndMinus} onClick={volumePlus} />
      </span>
    </button>
  );
};

export default Sound;
