import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import c from './app.module.css';

import Home from './components/home/Home';
import Contacts from './components/contacts/Contacts';
import Header from './components/nav_bar/NavBar';
import MyWorks from './components/my_works/MyWorks';
import Skills from './components/skills/Skills';
import AboutMe from './components/about_me/AboutMe';

function App() {
  return (
    <main className={c.app}>
        <Header />

        <div className="mainContent">
          <Route path={'/'} exact render={() => <Redirect to="/home"/>}/>

          <Route path="/home" render={() => <Home/>}/>

          <Route path="/about_me" render={() => <AboutMe/>}/>

          <Route path="/skills" render={() => <Skills/>}/>

          <Route path="/works" render={() => <MyWorks/>}/>

          <Route path="/contacts" render={() => <Contacts/>}/>
        </div>
    </main>
  );
}

export default App;
