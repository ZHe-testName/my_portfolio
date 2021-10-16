import c from './education.module.scss';
import EducationCard from "./education_card/EducationCard";

function Education(props) {
    const cardsArr = props.educationArr.map(el => <EducationCard key={el.institution} {...el}/>);

    return(
        <div className={c.educationBlock}>
            <h3>
                образование
            </h3>

            <ul>
                {cardsArr}
            </ul>
        </div>
    );
};

export default Education;