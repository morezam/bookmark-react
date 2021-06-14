import React from 'react';
import styled from 'styled-components';
import { H3 } from '../Typographi';
import { Btn } from '../Btn';

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 35rem;
	box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.08);
	position: relative;
	margin: 0 2rem;
	top: ${props => props.topCard};

	@media only screen and (max-width: 600px) {
		height: 40rem;
	}
	@media only screen and (max-width: 500px) {
		margin: 0;
	}
`;

const CardText = styled.p`
	font-size: 1.5rem;
	color: var(--color-text);
`;

const CardDiv = styled.div`
	@media only screen and (max-width: 500px) {
		display: flex;
		justify-content: center;
	}
`;

const CardImg = styled.img`
	width: 90%;
	@media (max-width: 900px) {
		width: 80%;
	}
	@media only screen and (max-width: 500px) {
		width: 65%;
	}
`;

const CardDots = styled.img`
	@media (max-width: 900px) {
		width: 90%;
	}
	@media (max-width: 500px) {
		width: 100%;
	}
`;

const Card = ({ src, h3, text, topCard }) => {
	return (
		<CardWrapper topCard={topCard}>
			<CardDiv>
				<CardImg src={src} alt="" />
			</CardDiv>
			<H3>{h3}</H3>
			<CardText>{text}</CardText>
			<CardDots src="img/bg-dots.svg" alt="" />
			<Btn primary>Add & Install Extension</Btn>
		</CardWrapper>
	);
};

export default Card;
