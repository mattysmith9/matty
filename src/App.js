import React, { Component } from 'react';
import Landing from './screens/Landing';
import MyStory from './screens/Story';
import Projects from './screens/Projects';
import Footer from './components/footer';
import Skills from './screens/Skills';

class App extends Component {
	render() {
		return (
			<div className="Matty-Landing-Page">
				<Landing />
				<MyStory />
				<Skills />
				<Projects />
				<Footer />
			</div>
		);
	}
}

export default App;
