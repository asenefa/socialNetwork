let renderTree = () => {
  console.log('lol')
}

let state = {
  profilePage: {
    postsData: [
      { id: 1, message: 'Hi, how r u?', countLike: 2 },
      { id: 2, message: 'I\'m fine!', countLike: 5 },
      { id: 3, message: 'lalala', countLike: 3 }
    ],
    newPostText: 'dog'
  },
  dialogsPage: {
    dialogsData: [
      { id: 1, name: 'Stas' },
      { id: 2, name: 'Mather' },
      { id: 3, name: 'Father' },
      { id: 4, name: 'Sister' },
    ],
    messagesData: [
      { id: 1, message: 'Hi!' },
      { id: 2, message: 'How are you doing?' },
      { id: 3, message: "I'm fine. And you?" },
      { id: 4, message: "I'm good." },
    ]
  },
  sidebar: {
    friends: [
      { id: 1, name: 'Masha' , url: 'https://i.pinimg.com/originals/58/8c/82/588c82e73c0eb934dd16e17f5b9620ad.jpg'},
      { id: 2, name: 'Inna', url: 'https://i.pinimg.com/originals/58/8c/82/588c82e73c0eb934dd16e17f5b9620ad.jpg' },
      { id: 3, name: 'Olga',  url: 'https://i.pinimg.com/originals/58/8c/82/588c82e73c0eb934dd16e17f5b9620ad.jpg' },
    ]
  }
}

window.state = state;
export const addPost = () => {
  state.profilePage.postsData.push(
    {
      id: 4,
      message: state.profilePage.newPostText,
      countLike: 0 
    }
  )
  state.profilePage.newPostText = '';
  renderTree(state)
}

export const updateNewPost = (newPostText) => {
  state.profilePage.newPostText = newPostText;
  renderTree(state)
}

export const subscribe = (observer) => {
  renderTree = observer
}

export default state;