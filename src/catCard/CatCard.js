import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, deleteCard } from '../redux/slices/likesSlice';
import { Button } from '../shared/ui';
import * as classes from './CatCard.module.css';
import { IconFavoriteBorder } from './assets/favBorderIcon';
import { IconFavorite } from './assets/favoriteIcon';

export function CatCard({ url }) {
  const favCats = useSelector((state) => state.likes.likes);
  const [like, setLike] = useState(url in favCats);
  const isTouch = useSelector((state) => state.touch.touch);
  const dispatch = useDispatch();

  function handleClick() {
    setLike((prev) => !prev);

    if (url in favCats) {
      dispatch(deleteCard({ url }));
    } else {
      dispatch(add({ url }));
    }
  }

  return (
    <div className={classes.catContainer}>
      <img
        src={url}
        alt="cat"
        className={classes.catImg}
        onDoubleClick={handleClick}
      />
      <Button
        className={classes.containerIconsFav}
        onClick={() => handleClick()}
      >
        <IconFavorite
          className={`${classes.iconFavorite} ${like && classes.active}`}
        />
        <IconFavoriteBorder
          // className={`${classes.iconFavoriteBorder} ${like && !isTouch && classes.borderActive} ${isTouch && classes.borderActive}`}
          className={`${classes.iconFavoriteBorder} ${like && classes.borderActive} ${isTouch && !like && classes.isTouch}`}
        />
        {/* {isTouch && <Button>TOUCH</Button>} */}
      </Button>
    </div>
  );
}
