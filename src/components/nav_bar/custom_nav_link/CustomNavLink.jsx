import {NavLink} from 'react-router-dom';
import c from './navlink.module.css';

function CustomNavLink(props) {
    const {href, description} = props;

    return (
        <NavLink to={href} >
            <h3>
                {description}
            </h3>
        </NavLink>
    );
};

export default CustomNavLink;
