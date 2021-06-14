import React, { useState } from 'react';
import { Btn } from '../Btn';
import FlexMain from '../flexmain';
import { Tabs, Tab, TabContent } from './TabsStyles';

const tabsInfo = [
	{
		title: 'Simple Bookmarking',
	},
	{
		title: 'Speedy Searching',
	},
	{
		title: 'Easy Sharing',
	},
];

const contentInfo = [
	{
		src: 'img/illustration-features-tab-1.svg',
		text:
			'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
		htext: 'Bookmark in one click',
		btn: 'More Info',
	},
	{
		src: 'img/illustration-features-tab-2.svg',
		text:
			'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
		htext: 'Intelligent search',
		btn: 'More Info',
	},
	{
		src: 'img/illustration-features-tab-3.svg',
		text:
			'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
		htext: 'Share your bookmarks',
		btn: 'More Info',
	},
];

const TabShow = () => {
	const [active, setActive] = useState(0);

	const onTabClick = indx => {
		setActive(indx);
	};

	return (
		<>
			<Tabs>
				{tabsInfo.map((tab, indx) => {
					return (
						<Tab
							onClick={() => onTabClick(indx)}
							key={tab.title}
							active={active === indx}>
							{tab.title}
						</Tab>
					);
				})}
			</Tabs>

			{contentInfo.map((content, indx) => {
				return (
					<TabContent active={active === indx}>
						<FlexMain
							src={content.src}
							text={content.text}
							htext={content.htext}>
							<Btn primary>{content.btn}</Btn>
						</FlexMain>
					</TabContent>
				);
			})}
		</>
	);
};

export default TabShow;
