import c from './avatar_img.module.scss';

function AvatarImg (props) {
    return <div className={c.avatarImg} 
                style={{
                   backgroundImage: `url(${props.img})`,                             
                }}></div>
};

export default AvatarImg;