import React from 'react';
import List from '../List';
import { SvgFooter } from '../SVG';
import { FooterWrapper, FooterImgs } from './FooterStyles';

const Footer = () => {
	return (
		<>
			<FooterWrapper>
				<List footer>
					<FooterImgs>
						<SvgFooter facebook />
						<SvgFooter />
					</FooterImgs>
				</List>
			</FooterWrapper>
		</>
	);
};

export default Footer;
