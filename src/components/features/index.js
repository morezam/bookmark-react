import React from 'react';
import Rect from '../Rect';
import TabShow from '../tabs';
import Template from '../Template';

const Feature = () => {
	return (
		<Template
			h2="Features"
			text="Our aim is to make it quick and easy for you to access your favourite
			websites. Your bookmarks sync between your devices so you can access
			them on the go.">
			<TabShow />
			<Rect feature />
		</Template>
	);
};

export default Feature;
