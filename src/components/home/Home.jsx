import React from "react";
import AvatarImg from "../avatar_img/AvatarImg";
import {NavLink} from 'react-router-dom';
import avatar from '../../imgs/AirBrush_20200203115910_LI.jpg';

import c from './home.module.scss';

function Home() {
    return (
        <section className={c.myHome}>
            <div className={c.homeMeWrap}>
                <div className={c.homeMeImage}>
                    <AvatarImg img={avatar}/>
                </div>

                <div className={c.homeMeDescription}>
                    <div className={c.homeTitle}>
                        <h1>
                            Я ХОРУНЖИЙ ЕВГЕНИЙ
                        </h1>

                        <span>JS РАЗРАБОТЧИК</span>
                    </div>

                    <p>
                        Я JS(React)-разработчик из Украины, специализирующийся на создании чистого и удобного интерфейса и приложений. 
                    </p>
                    <p>
                        Увлечен созданием отличного программного обеспечения, которое улучшит жизнь окружающих меня людей.
                    </p>

                    <div className={c.buttonwrap}>
                        <NavLink to={'about_me'} 
                                className={c.navlink}
                                activeStyle={{
                                                backgroundColor: '#ffb400;',
                                            }}>
                            <h4>
                                Подробнее...
                            </h4>
                        </NavLink>
                        {/* <CustomNavLink href="about_me" description="Подробнее..."/> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;