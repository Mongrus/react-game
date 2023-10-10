import styles from './Button.module.sass';
import useSound from 'use-sound';
import sound from '../../sounds/mainButton.mp3';

function Button(props) {
  const [play, { stop }] = useSound(sound);
  const { children } = props;
  return (
    <button
      className={styles.button}
      onMouseEnter={() => play()}
      onMouseLeave={() => stop()}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
