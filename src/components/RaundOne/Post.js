import { useState } from 'react';
import styles from './Post.module.sass';
import Button from './Button';

function Post({ post, twoRaundStart }) {
  const [img, setImg] = useState(styles.imgStandart);

  const imgBig = () => {
    setImg(styles.imgBig);
  };

  const imgSmall = () => {
    setImg(styles.imgStandart);
  };

  return (
    <div className={styles.posts} onMouseOver={imgBig} onMouseOut={imgSmall}>
      <h2>{post.id}</h2>
      <img className={img} src={post.avatar} alt="#" />
      <h3>
        {post.first_name} {post.last_name}
      </h3>
      <h4 className={post.gender === 'Male' ? styles.male : styles.female}>
        {post.gender}
      </h4>
      <Button
        onClick={() =>
          twoRaundStart(
            post.id,
            post.first_name,
            post.last_name,
            post.avatar,
            post.gender
          )
        }
      >
        Выбрать Бота
      </Button>
    </div>
  );
}

export default Post;
