import {NavLink} from 'react-router-dom';
import c from './navlink.module.scss';

function CustomNavLink(props) {
    const {href, description} = props;
    const bgc = document.documentElement.clientWidth >= 962 ? '#ffb400' : 'transparent';

    return (
        <NavLink to={href} activeStyle={{
            backgroundColor: bgc,
        }}>
            <h3>
                {description}
            </h3>
        </NavLink>
    );
};

export default CustomNavLink;
