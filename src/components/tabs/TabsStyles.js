import styled from 'styled-components';

export const Tabs = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
	margin-bottom: 8rem;
	width: 80rem;

	@media (max-width: 700px) {
		width: 60rem;
	}

	@media (max-width: 600px) {
		flex-direction: column;
		margin-bottom: 10rem;
		width: 40rem;
	}
`;

export const Tab = styled.button`
	background-color: white;
	border: none;
	border-bottom: ${({ active }) =>
		active
			? '3.5px solid var(--color-secondary)'
			: '1px solid var(--color-text)'};
	padding: 2rem;
	width: 100%;
	cursor: pointer;
	font-family: inherit;
	font-size: 1.6rem;
	color: ${({ active }) =>
		active ? 'var(--color-primary-dark)' : 'var(--color-text)'};

	&:focus {
		outline: 0;
	}
`;

export const TabContent = styled.div`
	/* ${props => (props.active ? '' : 'display:none')} */
	display: ${({ active }) => (active ? 'block' : 'none')};
`;
