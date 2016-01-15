/** @jsx dom */
import dom from 'magic-virtual-element';
import {render as r, tree} from 'deku';
import <%= classModuleName %> from '../';

const initialState = () => {
	return {
		message: 'Deku is awesome!'
	};
};

const render = ({state}) => {
	const {message} = state;

	return (
		<<%= classModuleName %> class='CustomClass' message={message}/>
	);
};

const App = {initialState, render};
const app = tree(<App/>);

r(app, document.body);
