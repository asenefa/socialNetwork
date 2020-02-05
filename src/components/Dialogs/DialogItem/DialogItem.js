import React from 'react';
import classes from './../Dialogs.module.css'
import { NavLink } from 'react-router-dom'

const DialogItem = (props) => {

  console.log(props)

  const path = '/dialogs/' + props.id
  return (

    <div className={classes.dialog}>
      <NavLink to={path} activeClassName={classes.active}>
        <img src='https://trikky.ru/wp-content/blogs.dir/1/files/2016/12/Avatar_1481048766783.png' 
          alt='ava' /><br/>
        <span>{props.name}</span>
      </NavLink>
    </div>
  )
}

export default DialogItem;
