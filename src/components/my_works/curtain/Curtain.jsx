import React, { useEffect, useState } from 'react';
import c from './curtain.module.scss';

const Curtain = ({ title, classPosition, isOn }) => {
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
            className={`${c.curtain} ${c[classPosition]}`}
            style={style}
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