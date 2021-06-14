import styled, { css } from 'styled-components';

export const FlexWrapper = styled.section`
	display: flex;
	align-items: center;

	${({ header }) =>
		header &&
		css`
			flex-direction: row-reverse;
		`}
	@media (max-width: 700px) {
		flex-direction: column;
	}
`;
export const FlexImgs = styled.div`
	position: relative;
`;

export const FlexImg = styled.img`
	width: ${({ header }) => (header ? '' : '160%')};
	@media (max-width: 1200px) {
		width: ${({ header }) => (header ? '55rem' : '45rem')};
	}
	@media (max-width: 1000px) {
		width: ${({ header }) => (header ? '48rem' : '45rem')};
	}
	@media (max-width: 800px) {
		width: ${({ header }) => (header ? '50rem' : '45rem')};
	}
	@media (max-width: 720px) {
		width: ${({ header }) => (header ? '45rem' : '45rem')};
	}
	@media (max-width: 700px) {
		width: ${({ header }) => (header ? '55rem' : '50rem')};
	}
	@media (max-width: 600px) {
		width: ${({ header }) => (header ? '50rem' : '45rem')};
	}
	@media (max-width: 500px) {
		width: ${({ header }) => (header ? '45rem' : '40rem')};
	}
`;

export const FlexContent = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: ${({ header }) => (header ? '' : '30rem')};

	@media (max-width: 1200px) {
		margin-left: 2rem;
	}

	@media (max-width: 700px) {
		margin-top: 9rem;
	}

	@media (max-width: 600px) {
		margin-top: 13rem;
	}
`;
export const FlexText = styled.p`
	color: var(--color-text);
	line-height: 1.6;
	margin: 2.5rem 0;
	width: 70%;
	text-align: ${({ header }) => (header ? '' : 'center')};
	align-self: ${({ header }) => (header ? '' : 'center')};

	@media (max-width: 1200px) {
		width: 100%;
	}
	@media only screen and (max-width: 800px) {
		text-align: center;
	}
`;
export const FlexBtn = styled.div`
	display: flex;
	align-self: ${({ header }) => (header ? 'center' : 'center')};
	@media only screen and (max-width: 800px) {
		align-self: center;
	}
`;
