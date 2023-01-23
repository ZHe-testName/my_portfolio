import { useTranslation } from 'react-i18next';
import c from './education.module.scss';
import EducationCard from "./education_card/EducationCard";

function Education(props) {
  const {t} = useTranslation();
  const cardsArr = props.educationArr.map(el => <EducationCard key={el.institution} {...el}/>);

  return(
    <div className={c.educationBlock}>
      <h3>
        {t('education.education')}
      </h3>

      <ul>
        {cardsArr}
      </ul>
    </div>
  );
};

export default Education;