import c from './education.module.css';
import EducationCard from "./education_card/EducationCard";

function Education() {
    return(
        <div className={c.educationBlock}>
            <h3>
                образование
            </h3>

            <ul>
                <EducationCard/>
                <EducationCard/>
                <EducationCard/>
                <EducationCard/>
            </ul>
        </div>
    );
};

export default Education;