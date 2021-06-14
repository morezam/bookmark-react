import styled, { css } from 'styled-components';

const common = {
	color: 'var(--color-primary-dark)',
};

export const H1 = styled.h1`
	font-size: 5rem;
	color: ${common.color};

	@media only screen and (max-width: 700px) {
		text-align: center;
	}
	@media only screen and (max-width: 450px) {
		font-size: 4.5rem;
	}
	@media only screen and (max-width: 400px) {
		font-size: 4rem;
	}
	@media only screen and (max-width: 350px) {
		font-size: 3.5rem;
	}
`;

export const H2 = styled.h2`
	font-size: 3rem;
	color: ${props => props.color || 'var(--color-primary-dark)'};
	text-align: center;
	${({ sub }) =>
		sub &&
		css`
			width: 30%;
			line-height: 1.6;
			text-align: center;

			@media (max-width: 600px) {
				width: 100%;
			}
		`};
`;

export const H3 = styled.h3`
	font-size: 2rem;
	color: ${common.color};
`;
