import c from './success_popup.module.scss';

function SuccessPopup ({ status }){
    return(
        <div
            className={c.success}>
            {/* <div className={c.pacmanPath}>
                <div className={c.pacman}>

                </div>
            </div> */}
            
            <div className={c.resultScream}>
                { status }
            </div>
        </div>
    );
};

export default SuccessPopup;