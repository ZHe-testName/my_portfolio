import React, { Suspense, useState } from 'react';
import {Route, Redirect} from 'react-router-dom';

import c from './app.module.scss';

import i18n from './i18n';

import Home from './components/home/Home';
import Contacts from './components/contacts/Contacts';
import MyWorks from './components/my_works/MyWorks';
import AboutMe from './components/about_me/AboutMe';
import NavBar from './components/nav_bar/NavBar';
import Sandwich from './components/sandwich/Sandwich';
import emailjs from 'emailjs-com';
import LocaleContext from './LocaleContext';
import { useTranslation } from 'react-i18next';


function App() {
  const [locale, setLocale] = useState(i18n.language);

  i18n.on('languageChanged', (lng) => setLocale(i18n.language));

  const {t} = useTranslation();

  const personalInfo = {
    name: t('personal.name'),
    surname: t('personal.surname'),
    age: '33',
    nationality: t('personal.nationality'),
    country: t('personal.country'),
    phone: '+380638828081',
    email: 'horunzhy.wgen@gmail.com',
    languages: 'RU, EN, UK',
  };

  const skillsArr = [
    [85, 'javascript'],
    [60, 'typescript'],
    [70, 'css'],
    [65, 'html'],
    [70, 'react'],
    [75, 'nuxt'],
    [55, 'three.js'],
    [75, 'vue'],
  ];

  const educationArr = [
    {
      year: 2017,
      institution: t('education.vpnu.institution'),
      specialize: t('education.vpnu.specialization'),
      textDesc: t('education.vpnu.description'),
    },
    {
      year: 2018,
      institution: t('education.siemens.institution'),
      specialize: t('education.siemens.specialization'),
      textDesc: t('education.siemens.description'),
    },
    {
      year: 2019,
      institution: t('education.itvdn.institution'),
      specialize: t('education.itvdn.specialization'),
      textDesc: t('education.itvdn.description'),
    },
    {
      year: 2019,
      institution: t('education.glo.institution'),
      specialize: t('education.glo.specialization'),
      textDesc: t('education.glo.description'),
    },
    {
      year: 2020,
      institution: t('education.jm.institution'),
      specialize: t('education.jm.specialization'),
      textDesc: t('education.jm.description'),
    },
    {
      year: 2021,
      institution: t('education.incubator.institution'),
      specialize: t('education.incubator.specialization'),
      textDesc: t('education.incubator.description'),
    },
  ];

  const myWorksData = [
    {
      curtainTitle: 'Medium Clone',
      link: 'https://vue-udemy-course-2ejue1gd9-zhe-testname.vercel.app',
      image: 'medium',
      tec: ['VUE2', 'VUEX'],
      isAdaptive: true,
    },
    {
      curtainTitle: 'Haunted House',
      link: 'https://three-js-jorney.vercel.app/',
      image: 'house',
      tec: ['Three.JS'],
      isAdaptive: false,
    },
    {
      curtainTitle: 'ToDo List',
      link: 'https://zhe-testname.github.io/TS_ToDoList/',
      image: 'todo',
      tec: ['TS', 'REACT', 'REDUX'],
      isAdaptive: true,
    },
    {
      curtainTitle: 'Tasks Calendar',
      link: 'https://zhe-testname.github.io/test_react_calendar/',
      image: 'calendar',
      tec: ['TS', 'REACT', 'REDUX'],
      isAdaptive: false,
    },
    {
      curtainTitle: 'Aviator Game',
      link: 'https://three-js-two.vercel.app/',
      image: 'aviator',
      tec: ['ThreeJS'],
      isAdaptive: false,
    },
    {
      curtainTitle: 'Race Zero Game',
      link: 'https://nfs-0.vercel.app/',
      image: 'race',
      tec: ['JS', 'HTML', 'CSS'],
      isAdaptive: false,
    },
    {
      curtainTitle: 'Shader Flowers',
      link: 'https://shader-flowers.vercel.app/',
      image: 'flower',
      tec: ['Three.JS', 'Shaders'],
      isAdaptive: false,
    },
    {
      curtainTitle: 'Furniture Store',
      link: 'https://diploma-proj-gloka-cademy-js-vol12.vercel.app/',
      image: 'furniture',
      tec: ['JS', 'HTML', 'CSS'],
      isAdaptive: false,
    },
    {
      curtainTitle: 'Weather Forecast',
      link: 'https://forecust.vercel.app/',
      image: 'forecast',
      tec: ['Nuxt 3'],
      isAdaptive: false,
    },
  ];

  const [navIsVisible, showNav] = useState(false);
  const [sendingStatus, setSendStatus] = useState('');

  const showNavHandler = () => {
    showNav(!navIsVisible);
  };

  const sendEmailFunc = (values) => {
    const serviceId = 'my_prtfolio_service';
    const templateId = 'template_ninja_portfolio';
    const userId = 'user_PN1UtxxZmvfpNdfJkk6dh';

    emailjs.send(serviceId, templateId, values, userId)
        .then(res => {
          if (res.status === 200){
            setSendStatus('Successfully Sended!');

            setTimeout(() => setSendStatus(''), 3000);
          }
        }, err => {
          if (err){
            setSendStatus('Sending Error!');

            setTimeout(() => setSendStatus(''), 3000);
          }
        });
    }

  return (
      <LocaleContext.Provider value={{locale, setLocale}}>
        <Suspense fallback={<h2>Loading...</h2>}>
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

              <Route path="/works" render={() => <MyWorks myWorksData={myWorksData}/>}/>

              <Route path="/contacts" render={() => <Contacts onSubmit={sendEmailFunc} sendingStatus={sendingStatus}/>}/>
            </div>
          </main>
        </Suspense>
      </LocaleContext.Provider>
  );
}

export default App;
