import { useState } from 'react';

import './navbar.scss';
import menuIcon from '../../images/menu.svg';
import menuLogo from '../../images/jsh.png'

function Navbar() {

	const [menuActive, setMenuActive] = useState(false);
	
	const showMenu = () => {
		setMenuActive(!menuActive)
	};

	return (
		<nav className="navbar">
			<div className="container navbar__container">
				<a href="/" className='navbar__logo'>
					<img src={menuLogo} width="150px" alt="" />
				</a>
				<button onClick={showMenu} className="navbar__toggle">
					<img src={menuIcon} alt="menu" />
				</button>
				<div className={menuActive ? "navbar__menu--show" : "navbar__menu"}>
					<a href="/" className='navbar__menu-link active'>
						Home
					</a>
					<a href="/" className='navbar__menu-link'>
						About
					</a>
					<a href="/" className='navbar__menu-link'>
						Services
					</a>
					<a href="/" className='navbar__menu-link'>
						Contacts
					</a>
				</div>
			</div>
		</nav>
	)
}

export default Navbar;