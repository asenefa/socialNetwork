import React from 'react';
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'


const Dialogs = (props) => {
  console.log(props.state.dialogsData)
  let dialogsElements = props.state.dialogsData.map( 
    dialog => <DialogItem name={dialog.name} id={dialog.id} /> 
  );

  let messageElements = props.state.messagesData.map(
    msg => <Message message={msg.message} id={msg.id}  />
  )
  let newMessage = React.createRef();
  let sendMessage = () => {
    let text = newMessage.current.value;
    alert(text);
  }
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogItems}>

        {dialogsElements}

      </div>
      <div className={classes.messages}>
        {messageElements}
      </div>
      <textarea ref={newMessage}></textarea> <br />
      <button onClick={sendMessage} >Send</button>
    </div>
  )
}

export default Dialogs;
