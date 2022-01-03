import React, { useEffect, useState } from 'react';
import c from './curtain.module.scss';

const Curtain = ({ title, classPosition, isOn, link, tec }) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        isOn
            ?
            setStyle({
                top: '0px',
                left: '0px',
            })
            :
            setStyle({});
        
    }, [isOn]);

    return (
        <a 
            href={link}
            className={`${c.curtain} ${c[classPosition]}`}
            style={style}
            target='_blank'
            rel="noreferrer"
            >
            <div>
                { title }
            </div>

            <ul>
                {tec.map(el => <li key={el}>{el}</li>)}
            </ul>
        </a>
    );
};

export default Curtain;