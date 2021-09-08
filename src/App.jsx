import React from 'react';

import c from './app.module.css';

import AboutMe from './components/about_me/AboutMe';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import MyWorks from './components/my_works/MyWorks';
import RemoteJob from './components/remote_job/RemoteJob';
import ScrollUpButton from './components/scroll_up_button/ScrollUpButton';
import Skills from './components/skills/Skills';

function App() {
  return (
    <main className={c.app}>
        <Header />
        <AboutMe />
        <Skills />
        <MyWorks />
        <RemoteJob />
        <Contacts />
        <Footer />
        <ScrollUpButton />
    </main>
  );
}

export default App;
