// import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Posts.module.sass';
import Post from './Post.js';
import info from '../../data/info';

function Posts({ twoRaundStart }) {
  // const [post, setPost] = useState(null);
  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/photos')
  //     .then((result) => result.json())
  //     .then((json) => setPost(json));
  // }, []);

  return (
    <div className={styles.main}>
      {info &&
        info.map((info) => {
          return (
            <Post
              key={uuidv4()}
              id={uuidv4()}
              twoRaundStart={twoRaundStart}
              post={info}
            />
          );
        })}
    </div>
  );
}

export default Posts;
