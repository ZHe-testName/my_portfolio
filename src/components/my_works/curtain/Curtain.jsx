import React, { useEffect, useState } from 'react';
import c from './curtain.module.scss';

const Curtain = ({ title, classPosition, isOn, link }) => {
    const [style, setStyle] = useState({});
    console.log(classPosition, isOn);

    useEffect(() => {
        console.log('ef');
        isOn
            ?
            setStyle({
                top: '0px',
                left: '0px',
            })
            :
            setStyle({});
        
    }, [isOn]);

    // const onMouseLeaveHandler = () => {
    //     setStyle({});
    // };

    return (
        <a 
            href={link}
            className={`${c.curtain} ${c[classPosition]}`}
            style={style}
            target='_blank'
            // style={isVisible ? startPosition : {}}
            // onMouseLeave={() => {onMouseLeaveHandler()}}
            >
            <div>
                { title }
            </div>
        </a>
    );
};

export default Curtain;