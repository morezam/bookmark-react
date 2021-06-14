import React, { useState } from 'react';
import { Btn } from '../Btn';
import Template from '../Template';
import { FaqWrapper, FaqTitle, FaqContent, FaqImg, FaqP } from './FaqStyles';

const titleInfo = [
	'What is Bookmark',
	'How can I request a new browser?',
	' Is there a mobile app?',
	'What about other Chromium browsers?',
];

const FAQ = () => {
	const [active, setActive] = useState();
	return (
		<Template
			h2="Frequently Asked Questions"
			text="Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.">
			<FaqWrapper>
				{titleInfo.map((title, indx) => {
					return (
						<FaqTitle
							key={title}
							onClick={() => setActive(indx)}
							active={active === indx}>
							<FaqP>{title}</FaqP>
							<FaqImg
								src="img/icon-arrow.svg"
								alt=""
								active={active === indx}
							/>
							<FaqContent active={active === indx}>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
								adipisci illo? Aperiam architecto accusamus, perferendis, saepe
								amet excepturi ipsum porro natus perspiciatis doloribus
								reiciendis enim ad. Eaque illo mollitia perspiciatis?
							</FaqContent>
						</FaqTitle>
					);
				})}
			</FaqWrapper>
			<Btn primary>More Info</Btn>
		</Template>
	);
};

export default FAQ;
