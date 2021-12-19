import React, { useEffect, useState } from 'react';
import c from './curtain.module.scss';

const Curtain = ({ title, classPosition, isOn, link }) => {
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
            >
            <div>
                { title }
            </div>
        </a>
    );
};

export default Curtain;