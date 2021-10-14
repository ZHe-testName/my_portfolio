import c from './education_card.module.css';

function EducationCard(props) {
    const {year, institution, specialize, textDesc} = props;

    return(
        <li className={c.cardWrap}>
            <picture></picture>

            <div className={c.description}>
                <span className={c.year}>{year}</span>

                <div className={c.header}>
                    <h5>{specialize}</h5>
                    <span className={c.hederDescription}>{institution}</span>
                </div>

                <p>{textDesc}</p>
            </div>
        </li>
    );
};

export default EducationCard;