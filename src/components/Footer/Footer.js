import styles from './Footer.module.sass';

function Footer({ buttle }) {
  return (
    <div
      className={`${styles.footer} ${
        buttle >= 27 ? styles.footerFinalButtle : ''
      } ${buttle >= 38 ? styles.footerFinal : ''}`}
    >
      <h3>
        Спасибо Вам большое что посмотрели мой первый самостоятельный проект на
        React
      </h3>
      <a href="https://github.com/Mongrus?tab=repositories" target="Starfall">
        Нажав сюда вы можете посмотреть остальные мои работы на GitHub
      </a>
    </div>
  );
}

export default Footer;
