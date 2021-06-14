import styled from 'styled-components';

export const FaqWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
	transition: all 0.3s;
	margin: 3rem 0;

	@media (max-width: 1200px) {
		width: 60%;
	}
	@media (max-width: 1200px) {
		width: 75%;
	}
	@media (max-width: 600px) {
		width: 100%;
	}
`;

export const FaqTitle = styled.p`
	position: relative;
	transition: all 0.3s;

	border-bottom: ${({ active }) =>
		active ? '' : '1px solid var(--color-text)'};
	&:first-child {
		border-top: 1px solid var(--color-text);
	}
`;

export const FaqP = styled.p`
	color: var(--color-primary-dark);
	padding: 2rem;
	cursor: pointer;
	transition: all 0.3s;

	&:hover {
		color: var(--color-secondary);
	}
`;

export const FaqImg = styled.img`
	position: absolute;
	right: 1rem;
	top: 1.5rem;
	transition: all 0.3s;

	transform: ${({ active }) => (active ? 'rotate(180deg)' : '')};
	filter: ${({ active }) => (active ? 'hue-rotate(106deg)' : '')};
`;

export const FaqContent = styled.p`
	color: var(--color-text);
	margin: 2rem 0 3rem 2rem;
	display: ${({ active }) => (active ? 'block' : 'none')};
	transition: all 0.3s;
`;
