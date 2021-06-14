import styled, { css } from 'styled-components';

export const Btn = styled.button`
	font-family: inherit;
	font-size: 1.6rem;
	border-radius: 0.5rem;
	padding: 1.2rem 2rem;
	transition: all 0.3s;
	border: 0;
	cursor: pointer;

	&:hover {
		background-color: #fff;
	}
	&:focus {
		outline: 0;
	}
	&:active {
		transform: scale(0.97);
	}

	${({ primary }) =>
		primary &&
		css`
			color: #fff;
			background-color: var(--color-primary);
			border: 1px solid currentColor;
			&:hover {
				color: var(--color-primary);
			}
		`}

	${({ secondary }) =>
		secondary &&
		css`
			color: #fff;
			background-color: var(--color-secondary);
			border: 1px solid transparent;
			&:hover {
				color: var(--color-secondary);
				border: 1px solid currentColor;
			}
			padding: 1rem 3rem;
		`}

	${({ tertiary }) =>
		tertiary &&
		css`
			color: var(--color-primary-dark);
			border: 1px solid #fff;

			&:hover {
				border: 1px solid var(--color-primary-dark);
			}
		`}

	${({ nav }) =>
		nav &&
		css`
			color: #fff;
			border: 1px solid #fff;
			background-color: transparent;
			width: 80vw;
			padding: 2rem 0;
			font-size: 2rem;
			&:hover {
				background-color: transparent;
			}
		`}
`;
