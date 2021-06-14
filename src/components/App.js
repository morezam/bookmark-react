import React from 'react';
import GlobalStyle from './Base';
import Download from './download';
import FAQ from './faq';
import Feature from './features';
import Footer from './footer';
import Header from './header';
import Nav from './nav';
import Rect from './Rect';
import Subscribe from './subscribe';

const App = () => {
	return (
		<>
			<GlobalStyle />
			<Nav />
			<Header />
			<Feature />
			<Download />
			<FAQ />
			<Subscribe />
			<Footer />
		</>
	);
};

export default App;
