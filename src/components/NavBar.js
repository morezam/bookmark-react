import React from 'react';
import styled from 'styled-components';
import { Btn } from './Btn';
import List from './List';
import { SvgFooter } from './SVG';

const NavBarWrapper = styled.div`
	display: none;

	width: 100vw;
	height: 100vh;
	background-color: rgba(37, 43, 70, 0.95);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	/* display: ${({ open }) => (open ? 'flex' : 'none')}; */
	transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
	transition: all 0.9s;
	justify-content: center;
	align-items: center;

	@media only screen and (max-width: 600px) {
		display: block;
	}
`;

const NavBarImg = styled.div`
	@media only screen and (max-width: 600px) {
		width: 14rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: relative;
		bottom: 0;
	}
`;

const NavBarBtn = styled.div`
	position: absolute;
	top: 40rem;
	left: 10vw;
`;

const NavBarClose = styled.div`
	position: absolute;
	top: 4rem;
	right: 4rem;
`;

const NavClose = styled.img`
	@media only screen and (max-width: 600px) {
		display: ${({ open }) => (open ? 'block' : 'none')};
		cursor: pointer;
	}
`;

const NavBar = ({ open, setOpen }) => {
	return (
		<NavBarWrapper open={open}>
			<NavBarClose onClick={() => setOpen(false)}>
				<NavClose src="img/icon-close.svg" open={open} />
			</NavBarClose>
			<NavBarBtn>
				<Btn nav>LOGIN</Btn>
			</NavBarBtn>
			<List footer nav>
				<NavBarImg>
					<SvgFooter facebook />
					<SvgFooter />
				</NavBarImg>
			</List>
		</NavBarWrapper>
	);
};

export default NavBar;
