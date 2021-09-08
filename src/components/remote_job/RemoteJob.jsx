import React from "react";
import Button from "../button/Button";

import c from './remote_job.module.css';

function RemoteJob() {
    return (
        <section className={c.remoteJob}>
            <div className={c.remoteJobWrap}>
                <h3>
                    Рассматриваю варианты удаленной работы
                </h3>

                <Button title='Нанять меня'/>
            </div>
        </section>
    );
};

export default RemoteJob;