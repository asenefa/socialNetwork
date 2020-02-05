import React from 'react';
import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MyPosts from './components/MyPosts/MyPosts'
import {  Route } from 'react-router-dom'


const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Navbar />
        <AboutMe state={props.appState.sidebar}/>
        <div className='app-wrapper-contetnt'>
          <Route 
            path='/myposts' 
            render={ () => <MyPosts 
            state={props.appState.profilePage}
            addPost={props.addPost} />} 
          />
          <Route 
            path='/dialogs' 
            render={ () => <Dialogs 
            state={props.appState.dialogsPage} />} 
          />
          <Route path='/news' render={ () => <News />} />
          <Route path='/music' render={ () => <Music />} />
          <Route path='/settings' render={ () => <Settings />} />
          
          {/* <Route path='/settings' component={Settings} /> */}
        </div>
    </div>
  );
}

export default App;
