import React from 'react';
import styled from 'styled-components';
import Template from '../Template';
import Card from './Card';

const DownloadWrapper = styled.div`
	display: flex;
	@media (max-width: 700px) {
		flex-direction: column;
	}
`;

const Download = () => {
	return (
		<Template
			h2="Download the extension"
			text="We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize.">
			<DownloadWrapper>
				<Card
					src="img/logo-chrome.svg"
					text="Minimum Version 62"
					h3="Add to Chrome"
				/>
				<Card
					src="img/logo-firefox.svg"
					text="Minimum Version 55"
					h3="Add to Firefox"
					topCard="4rem"
				/>
				<Card
					src="img/logo-opera.svg"
					text="Minimum Version 46"
					h3="Add to Operax"
					topCard="8rem"
				/>
			</DownloadWrapper>
		</Template>
	);
};

export default Download;
