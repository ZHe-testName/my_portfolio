import {NavLink} from 'react-router-dom';

function CustomNavLink(props) {
    const {href, description} = props;

    return <NavLink to={href}>{description}</NavLink>
};

export default CustomNavLink;
