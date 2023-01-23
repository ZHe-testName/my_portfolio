import React from 'react';
import c from './pop_up.module.scss';

const PopUp = () => {
  return (
    <div className={c.shadowWrap}>
      <div className={c.popUpWrap}>
        <h3>
          Вы можете связатся со мной любым удомным для Вас способом
        </h3>

        <div className={c.links}>
          {/* <a href="mailto:horunzhy.wgen@gmail.com"></a>

          <a href="tel:{+380638828081}"></a>

          <a 
            href="https://www.facebook.com/horunzhy.wgen"
            target="_blank"
            rel="noreferrer"></a> */}
        </div>
      </div>
    </div>
  );
};

export default PopUp;