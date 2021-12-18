import React, { useEffect, useState } from 'react';
import c from './curtain.module.scss';

const Curtain = ({ title, classPosition }) => {
    const [style, setStyle] = useState({});

    useEffect(() => {
        setStyle({
            top: '0px',
            left: '0px',
        });

        return () => {
            console.log('done');
            setStyle({});
        }}, []);

    return (
        <a 
            className={classPosition}
            style={style}
            // style={isVisible ? startPosition : {}}
            // onMouseLeave={(e) => onMouseLeaveHandler(e)}
            >
            <div>
                { title }
            </div>
        </a>
    );
};

export default Curtain;