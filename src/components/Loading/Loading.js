import React from 'react';
import ReactLoading from 'react-loading';
import styles from './Loading.module.sass';

function Loading() {
  return (
    <div className={styles.loadingDiv}>
      <h2>Подождите пожалуйста, идет загрузка данных...</h2>
      <ReactLoading
        type="bubbles"
        color="DarkCyan"
        height={200}
        width={150}
      />{' '}
    </div>
  );
}

export default Loading;
