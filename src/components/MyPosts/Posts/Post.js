import React from 'react';
import classes from './Post.module.css'


const Post = (props) => {

  // console.log(props.message);

  return (
    <div className={classes.item}>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2NTZYMuePyY1p-To54jrgL3pWaPYalOt0NeOo2i_Yd-ghlWlc&s' alt='ava' />
      {props.message}
      <span>
        &#9829;
      </span> {props.countLike}
    </div>
  )
}

export default Post;
