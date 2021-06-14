import React from 'react';
import { Btn } from '../Btn';
import FlexMain from '../flexmain';
import { HeaderWrapper, HeaderBtns } from './Headerstyles';
import Rect from '../Rect';

const Header = () => {
	return (
		<>
			<HeaderWrapper>
				<Rect />
				<FlexMain
					src="img/illustration-hero.svg"
					text="A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
					h1
					htext="A Simple Bookmark Manager"
					header>
					<HeaderBtns>
						<Btn primary>Get it on Chrome</Btn>
						<Btn tertiary>Get it on Firefox</Btn>
					</HeaderBtns>
				</FlexMain>
			</HeaderWrapper>
		</>
	);
};

export default Header;
