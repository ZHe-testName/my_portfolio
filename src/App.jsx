import React, { useState } from 'react';
import {Route, Redirect} from 'react-router-dom';

import c from './app.module.scss';

import Home from './components/home/Home';
import Contacts from './components/contacts/Contacts';
import MyWorks from './components/my_works/MyWorks';
import AboutMe from './components/about_me/AboutMe';
import NavBar from './components/nav_bar/NavBar';
import Sandwich from './components/sandwich/Sandwich';
import emailjs from 'emailjs-com';

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

  const myWorksData = [
    {
      curtainTitle: 'Aviasales',
      link: 'https://zhe-testname.github.io/AviaSales/',
      image: '../../../imgs/aviasales.jpeg',
    },
    {
      curtainTitle: 'Social Network',
      link: '',
      image: '../../../imgs/aviasales.jpeg',
    },
    {
      curtainTitle: 'ToDo List',
      link: '',
      image: '../../../imgs/aviasales.jpeg',
    },
    {
      curtainTitle: 'Tasks Calendar',
      link: '',
      image: '../../../imgs/aviasales.jpeg',
    },
    {
      curtainTitle: 'Aviator Game',
      link: '',
      image: '../../../imgs/aviasales.jpeg',
    },
    {
      curtainTitle: 'Race Zero Game',
      link: '',
      image: '../../../imgs/aviasales.jpeg',
    },
    {
      curtainTitle: 'Skinali Page',
      link: '',
      image: '../../../imgs/aviasales.jpeg',
    },
    {
      curtainTitle: 'Furniture Store',
      link: '',
      image: '../../../imgs/aviasales.jpeg',
    },
    {
      curtainTitle: 'Cost Calculator',
      link: '',
      image: '../../../imgs/aviasales.jpeg',
    },
    {
      curtainTitle: 'Dialogs App',
      link: '',
      image: '../../../imgs/aviasales.jpeg',
    }
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
  );
}

export default App;
