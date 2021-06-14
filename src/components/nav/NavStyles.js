import styled from 'styled-components';

export const Navigation = styled.nav`
	padding: 5rem 15rem;

	@media (max-width: 700px) {
		padding: 5rem 2rem;
	}
	@media (max-width: 600px) {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}
`;

export const NavDiv = styled.div``;

export const NavMenu = styled.img`
	position: relative;
	display: none;
	transition: all 0.3s;

	@media only screen and (max-width: 600px) {
		display: ${({ open }) => (open ? 'none' : 'block')};
		cursor: pointer;
	}
`;
