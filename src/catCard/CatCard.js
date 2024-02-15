import { useState, useEffect } from 'react';
import * as classes from './CarCard.module.css';
import { IconFavoriteBorder } from './assets/favBorderIcon';
import { IconFavorite } from './assets/favoriteIcon';

export function CatCard({ url }) {
  const [like, setLike] = useState(false);
  // const map = {
  //   work: 'yes',
  // };
  // console.log('MAP', Object. );
  useEffect(() => {}, []);

  function handleClick() {
    console.log(`Like ${url}`);
    setLike((prev) => !prev);
    if (localStorage.getItem(url)) {
      localStorage.removeItem(url);
    } else {
      localStorage.setItem(url, url);
    }
  }

  return (
    <div className={classes.catContainer}>
      <img src={url} alt="cat" className={classes.catImg} />
      <button
        type="button"
        aria-label="liked"
        className={classes.containerIconsFav}
        onClick={handleClick}
      >
        <IconFavorite
          className={`${classes.iconFavorite} ${like ? classes.active : ''}`}
        />
        <IconFavoriteBorder
          className={`${classes.iconFavoriteBorder} ${like ? classes.borderActive : ''}`}
        />
      </button>
    </div>
  );
}

// data-url={url}
