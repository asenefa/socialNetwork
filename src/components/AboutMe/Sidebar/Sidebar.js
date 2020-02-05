import React from 'react';
import classes from './Sidebar.module.css'
import Friend from './Friend/Friend';

const Sidebar = (props) => {
    console.log(props.state);

    let friendElement = props.state.map(friend => 
        <Friend name={friend.name} url={friend.url}/>
    )

    return (
        <div className={classes.sidebar}>
            <h2>Friends</h2>
            <div className={classes.friends}>
                {friendElement}
                {/* <Friend name={props.state[0].name}/>
                <Friend name={props.state[1].name}/>
                <Friend /> */}
            </div>

        </div>
    )
}

export default Sidebar;