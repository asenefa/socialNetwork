import React from 'react';
import classes from './../Sidebar.module.css'

const Friend = (props) => {

    return (
        <div className={classes.friend}>
            <img alt='friend' src={props.url}/> <br/>
            <span>{props.name}</span>
        </div>
    )
}

export default Friend;