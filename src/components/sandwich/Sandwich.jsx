import c from './sandwich.module.scss';

function Sandwich(props) {


    return (
        <div className={c.sandwich}>
            <button 
                    onClick={props.showNav}>
                <span className={c.top}></span>

                <span className={c.middle}></span>

                <span className={c.bottom}></span>
            </button>
        </div>
    );
};

export default Sandwich;