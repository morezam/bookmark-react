import styled, { css } from 'styled-components';

export const ListFlex = styled.div`
	display: flex;
	align-items: center;

	${({ footer }) =>
		footer &&
		css`
			@media only screen and (max-width: 600px) {
				flex-direction: column;
			}
		`}

	${({ nav }) =>
		nav &&
		css`
			height: 100%;
			padding: 5rem;
		`}
`;

export const ListLogo = styled.div`
	position: relative;
	flex: ${({ footer }) => (footer ? '' : 1)};
`;

export const ListUl = styled.ul`
	list-style: none;
	display: flex;
	margin-left: 5rem;
	flex: ${({ footer }) => (footer ? 1 : '')};
	color: ${({ footer }) => (footer ? '#f2f2f2' : 'var(--color-primary-dark)')};

	@media only screen and (max-width: 600px) {
		display: ${({ footer }) => (footer ? '' : 'none')};
		flex-direction: ${({ footer }) => (footer ? 'column' : '')};
		margin: ${({ footer }) => (footer ? '5rem 0' : '')};
	}
`;

export const ListLink = styled.a`
	text-decoration: none;
	text-transform: uppercase;
	color: inherit;
	margin-right: 5.5rem;
	transition: all 0.3s;
	font-size: 1.6rem;

	&:hover {
		color: var(--color-secondary);
	}

	@media only screen and (max-width: 600px) {
		margin: ${({ footer }) => (footer ? '5rem 0' : '')};
		margin-right: 0;
		font-size: 2rem;
	}
`;

export const ListLi = styled.li`
	${({ nav }) =>
		nav &&
		css`
			padding: 2.5rem 0;
			border-bottom: 1px solid var(--color-text);
			width: 80vw;
			text-align: center;
			align-self: center;
			letter-spacing: 2px;
			&:first-child {
				border-top: 1px solid var(--color-text);
			}
		`}
	@media only screen and (max-width: 600px) {
		margin: ${({ footer }) => (footer ? '1.5rem 2rem' : '')};
		margin: ${({ nav }) => (nav ? '0' : '')};
	}
`;

export const ListChild = styled.div`
	position: relative;
	@media only screen and (max-width: 600px) {
		display: ${({ footer }) => (footer ? '' : 'none')};
	}
`;
