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
  const postElements = props.state.postsData.map(
    post => <Post message={post.message} countLike={post.countLike} id={post.id }  />
  )
  let newPostEl = React.createRef();
  let addPost = () => {
    let text = newPostEl.current.value;
    alert(text);
  };
  return (
    <div>
      My post
      <div>
        <div className='createPost'>
          <textarea ref= {newPostEl} className='textarea'></textarea>
        </div>
        <div>
          <button onClick={ addPost }>Add post</button>
        </div>
      </div>
        {postElements}
    </div>
  )
}

export default MyPosts;
