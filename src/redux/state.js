let state = {
  profilePage: {
    postsData: [
      { id: 1, message: 'Hi, how r u?', countLike: 2 },
      { id: 2, message: 'I\'m fine!', countLike: 5 },
      { id: 3, message: 'lalala', countLike: 3 }
    ]
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
export let addPost = (myPost) => {
  state.profilePage.postsData.push(
    {
      id: 4,
      message: myPost,
      countLike: 0 
    }
  )
}

export default state;