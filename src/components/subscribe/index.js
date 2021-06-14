import React from 'react';
import styled from 'styled-components';
import { Btn } from '../Btn';
import { H2 } from '../Typographi';

const SubscribeWrapper = styled.section`
	background-color: var(--color-primary);
	display: flex;
	flex-direction: column;
	height: 35rem;
	align-items: center;
	justify-content: space-around;
`;

const SubscribeP = styled.p`
	color: #fff;
	letter-spacing: 6px;
	font-size: 1.3rem;
	text-transform: uppercase;
	margin-top: 4rem;
`;

const InputWrapper = styled.div`
	display: flex;
	margin-bottom: 4rem;
	@media (max-width: 600px) {
		flex-direction: column;
	}
`;

const Input = styled.input`
	padding: 1.5rem;
	width: 30rem;
	border-radius: 0.5rem;
	border: 0;
	margin-right: 2rem;
	&:focus {
		outline: none;
	}

	@media (max-width: 600px) {
		margin: 2rem 0;
	}
`;

const Subscribe = () => {
	return (
		<SubscribeWrapper>
			<SubscribeP>35,000+ already joined</SubscribeP>
			<H2 color="#fff" sub>
				Stay up-to-date with what we’re doing
			</H2>
			<InputWrapper>
				<Input placeholder="Enter your email address" />
				<Btn secondary>Contact us</Btn>
			</InputWrapper>
		</SubscribeWrapper>
	);
};

export default Subscribe;
