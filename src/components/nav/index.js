import React, { useState } from 'react';
import { Btn } from '../Btn';
import List from '../List';
import NavBar from '../NavBar';
import { Navigation, NavMenu, NavDiv } from './NavStyles';

const Nav = () => {
	const [open, setOpen] = useState(false);
	return (
		<Navigation>
			<List>
				<Btn secondary>LOGIN</Btn>
			</List>
			<NavDiv>
				<NavMenu
					src="img/icon-hamburger.svg"
					alt=""
					onClick={() => setOpen(true)}
					open={open}
				/>
			</NavDiv>
			<NavBar open={open} setOpen={setOpen} />
		</Navigation>
	);
};

export default Nav;
