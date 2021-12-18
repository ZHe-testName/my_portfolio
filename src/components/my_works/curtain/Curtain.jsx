import React, { useEffect, useState } from 'react';
import c from './curtain.module.scss';

const Curtain = ({ title, classPosition }) => {
    const [style, setStyle] = useState({});
    console.log(classPosition);

    useEffect(() => {
        setStyle({
            top: '0px',
            left: '0px',
        });
    }, []);

    const onMouseLeave = () => {
        setStyle({});
    };

    return (
        <a 
            className={`${c.curtain} ${c[classPosition]}`}
            style={style}
            // style={isVisible ? startPosition : {}}
            onMouseLeave={() => {onMouseLeave()}}
            >
            <div>
                { title }
            </div>
        </a>
    );
};

export default Curtain;