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
  console.log(props)
  return (
      <div className='app-wrapper'>
        <Navbar />
        <AboutMe state={props.state.sidebar}/>
        <div className='app-wrapper-contetnt'>
          <Route 
            path='/myposts' 
            render={ () => <MyPosts 
            profilePage={props.state.profilePage}
            dispatch={props.dispatch} />} 
          />
          <Route 
            path='/dialogs' 
            render={ () => <Dialogs 
            state={props.state.dialogsPage} />} 
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
