import React from 'react';
import styled from 'styled-components';
import { H2 } from './Typographi';

const TemplateWrapper = styled.section`
	padding: 5rem 15rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
	margin-bottom: 10rem;

	@media (max-width: 1200px) {
		padding: 5rem 12rem;
	}
	@media (max-width: 1000px) {
		padding: 5rem 10rem;
	}
	@media (max-width: 700px) {
		margin-bottom: 0;
	}
	@media (max-width: 600px) {
		margin-bottom: 5rem;
	}

	@media only screen and (max-width: 400px) {
		padding: 5rem;
	}
`;

const TemplateText = styled.p`
	color: var(--color-text);
	line-height: 1.6;
	width: 45%;
	margin: 2rem 0 5rem 0;
	text-align: center;
	@media (max-width: 700px) {
		width: 100%;
	}
`;

const Template = ({ h2, text, children }) => {
	return (
		<TemplateWrapper>
			<H2>{h2}</H2>
			<TemplateText>{text}</TemplateText>
			{children}
		</TemplateWrapper>
	);
};

export default Template;
