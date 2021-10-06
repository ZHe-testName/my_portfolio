import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import c from './app.module.css';

import Home from './components/home/Home';
import Contacts from './components/contacts/Contacts';
import MyWorks from './components/my_works/MyWorks';
import Skills from './components/skills/Skills';
import AboutMe from './components/about_me/AboutMe';
import NavBar from './components/nav_bar/NavBar';

function App() {
  return (
    <main className={c.app}>
        <NavBar />

        <div className="mainContent">
          <Route path={'/'} exact render={() => <Redirect to="/home"/>}/>

          <Route path="/home" render={() => <Home/>}/>

          <Route path="/about_me" render={() => <AboutMe/>}/>

          <Route path="/skills" render={() => <Skills/>}/>

          <Route path="/skills" render={() => <MyWorks/>}/>

          <Route path="/skills" render={() => <Contacts/>}/>
        </div>
    </main>
  );
}

export default App;
