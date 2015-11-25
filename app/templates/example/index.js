/** @jsx dom */
import dom from 'magic-virtual-element';
import {render, tree} from 'deku';
import Component from '../';

const App = {
	initialState() {
		return {
			message: 'Deku is awesome!'
		};
	},

	render({state}) {
		const {message} = state;

		return (
			<Component class="DekuComponent" message={message}/>
		);
	}
};

const app = tree(<App/>);
render(app, document.body);
