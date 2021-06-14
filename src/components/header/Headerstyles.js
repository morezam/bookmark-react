import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	position: relative;
	padding: 5rem 7rem 0 15rem;
	overflow: hidden;

	@media (max-width: 900px) {
		padding: 5rem 7rem 0 8rem;
	}
	@media (max-width: 700px) {
		padding: 5rem 7rem 0 7rem;
	}
	@media (max-width: 600px) {
		padding: 5rem;
	}
	@media (max-width: 450px) {
		padding: 3rem;
	}
`;

export const HeaderBtns = styled.div`
	display: flex;
	width: 35rem;
	justify-content: space-between;
`;
