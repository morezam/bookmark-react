import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	overflow: hidden;
`;

const SvgWrapper = styled.svg`
	width: 50rem;
	height: 55rem;
	position: absolute;
	right: ${({ feature }) => (feature ? '102rem' : '0')};
	top: ${({ feature }) => (feature ? '25rem' : '15rem')};
	transform: ${({ feature }) => (feature ? 'rotate(180deg)' : '')};
	z-index: -1;

	@media (max-width: 1200px) {
		right: ${({ feature }) => (feature ? '50rem' : '0')};
		top: ${({ feature }) => (feature ? '30rem' : '15rem')};
	}
	@media (max-width: 1200px) {
		right: ${({ feature }) => (feature ? '60rem' : '0')};
		top: ${({ feature }) => (feature ? '25rem' : '15rem')};
	}
	@media (max-width: 700px) {
		right: ${({ feature }) => (feature ? '26rem' : '0')};
		top: ${({ feature }) => (feature ? '20rem' : '15rem')};
	}
	@media only screen and (max-width: 600px) {
		right: ${({ feature }) => (feature ? '14rem' : '-5rem')};
		top: ${({ feature }) => (feature ? '35rem' : '10rem')};
	}
	@media only screen and (max-width: 500px) {
		right: ${({ feature }) => (feature ? '20rem' : '-5rem')};
		top: ${({ feature }) => (feature ? '35rem' : '10rem')};
	}
	@media only screen and (max-width: 450px) {
		right: ${({ feature }) => (feature ? '14rem' : '-10rem')};
		top: ${({ feature }) => (feature ? '35rem' : '10rem')};
	}
	@media only screen and (max-width: 400px) {
		right: ${({ feature }) => (feature ? '14rem' : '-15rem')};
		top: ${({ feature }) => (feature ? '35rem' : '10rem')};
	}
	@media only screen and (max-width: 350px) {
		right: ${({ feature }) => (feature ? '10rem' : '-15rem')};
		top: ${({ feature }) => (feature ? '35rem' : '10rem')};
	}
`;

const Rectangular = styled.rect`
	width: 70rem;
	height: 35rem;
	fill: var(--color-primary);
	@media (max-width: 1200px) {
		height: 30rem;
	}
	@media (max-width: 600px) {
		height: 30rem;
	}
`;

const Rect = ({ feature }) => {
	return (
		<Wrapper>
			<SvgWrapper feature={feature}>
				<Rectangular rx="150" />
			</SvgWrapper>
		</Wrapper>
	);
};

export default Rect;
