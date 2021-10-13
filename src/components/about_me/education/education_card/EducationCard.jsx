import c from './education_card.module.css';

function EducationCard() {
    return(
        <li className={c.cardWrap}>
            <picture></picture>

            <span className={c.year}>2007</span>

            <h5>bachelor degree</h5>

            <span className={c.hederDescription}>vinitsya university</span>

            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis architecto doloremque, 
                similique eos sed, tempora quam molestiae rem laboriosam dolore excepturi natus obcaecati iure repellat possimus, 
                cupiditate eaque totam delectus?
            </p>
        </li>
    );
};

export default EducationCard;