import React from "react";
import Button from "../button/Button";
import PopUp from "./pop_up/PopUp";

import c from './remote_job.module.scss';

function RemoteJob() {
  return (
    <section className={c.remoteJob}>
      <div className={c.remoteJobWrap}>
        <PopUp />

        <h3 className={c.h3}>
            Рассматриваю варианты удаленной работы
        </h3>

        <div className={c.buttonWrap}>
          <Button 
            title="Нанять меня"
            onClick={() => {console.log('click')}}/>
        </div>
      </div>
    </section>
  );
};

export default RemoteJob;