import React from 'react';
import { H1, H2 } from '../Typographi';
import {
	FlexWrapper,
	FlexImgs,
	FlexImg,
	FlexContent,
	FlexBtn,
	FlexText,
} from './FlexStyles';

const FlexMain = ({ src, text, header, h1, htext, children }) => {
	return (
		<>
			<FlexWrapper header={header}>
				<FlexImgs>
					<FlexImg header={header} src={src} alt="" />
				</FlexImgs>
				<FlexContent header={header}>
					{h1 ? <H1>{htext}</H1> : <H2>{htext}</H2>}
					<FlexText header={header}>{text}</FlexText>
					<FlexBtn header={header}>{children}</FlexBtn>
				</FlexContent>
			</FlexWrapper>
		</>
	);
};

export default FlexMain;
