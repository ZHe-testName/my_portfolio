import React, { useState } from 'react';
import {Route, Redirect} from 'react-router-dom';

import c from './app.module.scss';

import Home from './components/home/Home';
import Contacts from './components/contacts/Contacts';
import MyWorks from './components/my_works/MyWorks';
import AboutMe from './components/about_me/AboutMe';
import NavBar from './components/nav_bar/NavBar';
import Sandwich from './components/sandwich/Sandwich';

function App() {
  const personalInfo = {
    name: 'Евгений',
    surname: 'Хорунжий',
    age: '31',
    nationality: 'Украинец',
    country: 'Украина',
    phone: '+380638828081',
    email: 'horunzhy.wgen@gmail.com',
    languages: 'RU, EN, UK',
  };

  const skillsArr = [
    [65, 'javascript'],
    [35, 'typescript'],
    [55, 'css'],
    [40, 'html'],
    [45, 'react'],
  ];

  const educationArr = [
    {
      year: 2017,
      institution: 'внту инээм',
      specialize: 'бакалавр',
      textDesc: 'Степень бакалавра в Винницком Политехничном Национальном Университете, Институт Электропривода и Электромеханики',
    },
    {
      year: 2018,
      institution: 'siemens',
      specialize: 'siemens-programer',
      textDesc: '6 курсов обучения. Siemens Programer Stage 2',
    },
    {
      year: 2019,
      institution: 'itvdn',
      specialize: 'front-end developer',
      textDesc: '6-ти месечный курс Front-End Developer',
    },
    {
      year: 2019,
      institution: 'glo-academy',
      specialize: 'js-developer',
      textDesc: '4-ёх месечный курс JS-Developer. Первое место по итогам обучения. Третье место на конкурсе проектов',
    },
    {
      year: 2020,
      institution: 'jm',
      specialize: 'js-developer',
      textDesc: '6-ми месечный курс JS-Developer.',
    },
    {
      year: 2021,
      institution: 'it-incubator',
      specialize: 'js(react)-developer',
      textDesc: '8-ми месячный курс JS(React)-Developer',
    },
  ];

  const [navIsVisible, showNav] = useState(false);

  const showNavHandler = () => {
    showNav(!navIsVisible);
  };

  return (
    <main className={c.app}>
        <NavBar navIsVisible={navIsVisible} hiddeNav={showNavHandler}/>

        <Sandwich navIsVisible={navIsVisible} showNav={showNavHandler}/>

        <div className={c.mainContent}>
          <Route path={'/'} exact render={() => <Redirect to="/home"/>}/>

          <Route path="/home" render={() => <Home/>}/>

          <Route path="/about_me" render={() => <AboutMe 
                                                      info={personalInfo} 
                                                      skillsCollection={skillsArr} 
                                                      educationArr={educationArr}/>}/>

          <Route path="/works" render={() => <MyWorks/>}/>

          <Route path="/contacts" render={() => <Contacts/>}/>
        </div>
    </main>
  );
}

export default App;
