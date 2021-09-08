import React from "react";
import Button from "../../button/Button";

import c from './my_work_card.module.css';

function MyWorkCard() {
    return (
        <article className={c.myWorkCardWrap}>
            <div>
                <Button title='Смотреть' />
            </div>

            <div>
                <p>
                    Название проекта
                </p>

                <div className={c.myWorkCardDescription}>
                    Краткое описание
                </div>
            </div>
        </article>
    );
};

export default MyWorkCard;