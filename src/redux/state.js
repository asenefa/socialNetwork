let store = {
  _state: {
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
  },
  _callSubscriber () {
    console.log('lol')
  },

  getState() {
    return this._state
  },  
  subscribe (observer) {
    this._callSubscriber = observer
  },

  // _addPost() {
  //   this._state.profilePage.postsData.push(
  //     {
  //       id: 4,
  //       message: this._state.profilePage.newPostText,
  //       countLike: 0 
  //     }
  //   )
  //   this._state.profilePage.newPostText = '';
  //   this._callSubscriber(this._state)
  // },
  // _updateNewPost (newPostText) {
  //   this._state.profilePage.newPostText = newPostText;
  //   this._callSubscriber(this._state)
  // },

  dispatch(action) {
    if (action.type === 'ADD-POST') {
      this._state.profilePage.postsData.push(
        {
          id: 4,
          message: this._state.profilePage.newPostText,
          countLike: 0
        }
      )
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state)
    } else if (action.type === 'UPDATE-NEW=POST') {
        this._state.profilePage.newPostText = action.newPostText;
        this._callSubscriber(this._state)
    }
  }
}

window.state = store;

export default store;