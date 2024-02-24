import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, deleteCard } from '../redux/slices/likesSlice';
import * as classes from './CatCard.module.css';
import { IconFavoriteBorder } from './assets/favBorderIcon';
import { IconFavorite } from './assets/favoriteIcon';

export function CatCard({ url }) {
  const [like, setLike] = useState(false);
  const dispatch = useDispatch();
  const favCats = useSelector((state) => state.likes.likes);

  function handleClick() {
    // console.log(`Like ${url}`);
    setLike((prev) => !prev);
    // if (localStorage.getItem(url)) {
    //   localStorage.removeItem(url);
    // } else {
    if (url in favCats) {
      dispatch(deleteCard({ url }));
    } else {
      dispatch(add({ url }));
    }
    // localStorage.setItem(url, url);
    // }
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
