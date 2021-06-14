import React from 'react';
import { SvgMain } from '../SVG';
import {
	ListFlex,
	ListLogo,
	ListUl,
	ListChild,
	ListLink,
	ListLi,
} from './ListStyles';

const List = ({ footer, nav, children }) => {
	return (
		<>
			<ListFlex footer={footer} nav={nav}>
				<ListLogo footer={footer}>
					<SvgMain footer={footer} nav={nav} />
				</ListLogo>
				<ListUl footer={footer}>
					<ListLi footer={footer} nav={nav}>
						<ListLink href="#">features</ListLink>
					</ListLi>
					<ListLi footer={footer} nav={nav}>
						<ListLink href="#">pricing</ListLink>
					</ListLi>
					<ListLi footer={footer} nav={nav}>
						<ListLink href="#">contact</ListLink>
					</ListLi>
				</ListUl>
				<ListChild footer={footer}>{children}</ListChild>
			</ListFlex>
		</>
	);
};

export default List;
