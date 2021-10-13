import c from './education_card.module.css';

function EducationCard() {
    return(
        <li className={c.cardWrap}>
            <picture></picture>

            <div className={c.description}>
                <span className={c.year}>2007</span>

                <div className={c.header}>
                    <h5>bachelor degree</h5>
                    <span className={c.hederDescription}>vinitsya university</span>
                </div>

                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis architecto doloremque, 
                    similique eos sed, tempora quam molestiae rem laboriosam dolore excepturi natus obcaecati iure repellat possimus, 
                    cupiditate eaque totam delectus?
                </p>
            </div>
        </li>
    );
};

export default EducationCard;