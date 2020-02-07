import React from 'react';
// import classes from './MyPosts.module.css'
import Post from './Posts/Post'


const MyPosts = (props) => {
  console.log(props)
  // let postsData = [
  //   {id: 1, message: 'Hi, how r u?', countLike: 2},
  //   {id: 2, message: 'I\'m fine!', countLike: 5},
  //   {id: 3, message: 'lalala', countLike: 3}
  // ]
// debugger;
  const postElements = props.profilePage.postsData.map(
    post => <Post message={post.message} countLike={post.countLike} id={post.id }  />

  )

  let newPostEl = React.createRef();//cсылка на элемент, где будет происходить событие (onChange onClick) 
  let renderNewPost = () => {
    // let text = props.updateNewPost;
    props.addPost(); //функция ф пропсах 
    // props.updateNewPost(''); //после добавления сделать пустую текстарию
    // alert(text);
  };

  let onPostChange = () => {
    let text = newPostEl.current.value;
    props.updateNewPost(text);
    // props.updateNewPost('');

    console.log(text)
  }

  return (
    <div>
      My post
      <div>
        <div className='createPost'>
          <textarea ref= {newPostEl} className='textarea' value={props.profilePage.newPostText} onChange={onPostChange}></textarea>
        </div>
        <div>
          <button onClick={ renderNewPost }>Add post</button>
        </div>
      </div>
        {postElements}
    </div>
  )
}

export default MyPosts;
