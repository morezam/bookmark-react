import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	background-color: var(--color-primary-dark);
	padding: 5rem 15rem;

	@media (max-width: 700px) {
		padding: 5rem 7rem;
	}
`;

export const FooterImgs = styled.div`
	display: inline;
	@media only screen and (max-width: 600px) {
		width: 14rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
