import React from 'react';
import classes from './AboutMe.module.css'
import Sidebar from './Sidebar/Sidebar'

const AboutMe = (props) => {

  return (
    <header className={classes.aboutMe}>
      <img src='https://i.pinimg.com/236x/81/a1/f7/81a1f706eb9c8942c41b06ca190a8112--videos-yoga-body-inspiration.jpg' alt='ava' />
      <div>
        <h2>Anna Rudenko</h2>
        <p>Kharkiv</p>
        <p>Frontend</p>
      </div>
      <Sidebar state={props.state.friends} />
    </header>
  )
}

export default AboutMe;
