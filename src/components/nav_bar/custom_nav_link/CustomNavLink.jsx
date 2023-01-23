import {NavLink} from 'react-router-dom';
import './navlink.module.scss';
// import homeIcon from '../../../icons/iconmonstr-home-6.svg';

function CustomNavLink(props) {
  const {href, description} = props;
  const bgc = document.documentElement.clientWidth >= 962 ? '#ffb400' : 'transparent';

  return (
    <NavLink 
      to={href} 
      activeStyle={{
        backgroundColor: bgc,
        //Why bgImage dont plug?????
        // backgroundImage: homeIcon,//icon,
        }}
        // style={{
        //  color: '#2d2d2d',
        //  backgroundImage: homeIcon,//icon,
        // }}
      >
      <h3>
        {description}
      </h3>
    </NavLink>
  );
};

export default CustomNavLink;
