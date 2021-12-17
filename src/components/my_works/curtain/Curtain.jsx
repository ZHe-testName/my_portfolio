import React from 'react';
import c from './curtain.module.scss';

const Curtain = ({ title, isVisible, onMouseLeaveHandler, startPosition }) => {
    return (
        <a 
            className={ isVisible ? `${c.curtain} ${c.invisibleCurtain}` : c.curtain }
            style={isVisible ? startPosition : {}}
            onMouseLeave={(e) => onMouseLeaveHandler(e)}>
            <div>
                { title }
            </div>
        </a>
    );
};

export default Curtain;