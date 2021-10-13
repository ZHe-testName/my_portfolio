import React from 'react';
import {Route, Redirect} from 'react-router-dom';

import c from './app.module.css';

import Home from './components/home/Home';
import Contacts from './components/contacts/Contacts';
import MyWorks from './components/my_works/MyWorks';
import AboutMe from './components/about_me/AboutMe';
import NavBar from './components/nav_bar/NavBar';
import RemoteJob from './components/remote_job/RemoteJob';

function App() {
  const personalInfo = {
    name: 'Евгений',
    surname: 'Хорунжий',
    age: '31',
    nationality: 'Украинец',
    country: 'Украина',
    phone: '+380638828081',
    email: 'horunzhy.wgen@gmail.com',
    languages: 'Русский, Украинский, English',
  };

  const skillsArr = [
    [65, 'javascript'],
    [30, 'typescript'],
    [45, 'css'],
    [40, 'html'],
    [55, 'react'],
  ];

  return (
    <main className={c.app}>
        <NavBar />

        <div className={c.mainContent}>
          <Route path={'/'} exact render={() => <Redirect to="/home"/>}/>

          <Route path="/home" render={() => <Home/>}/>

          <Route path="/about_me" render={() => <AboutMe info={personalInfo} skillsCollection={skillsArr}/>}/>

          <Route path="/works" render={() => <MyWorks/>}/>

          <Route path="/contacts" render={() => <Contacts/>}/>

          <Route path="/remote_job" render={() => <RemoteJob/>} />
        </div>
    </main>
  );
}

export default App;
