/** @jsx dom */
import dom from 'magic-virtual-element';

const propTypes = {
	class: {
		type: 'string'
	},
	message: {
		type: 'string'
	}
};

function render({props}) {
	const {message} = props;

	return (
			<div class={['Component', props.class]}>
				{message}
			</div>
	);
}

export default {propTypes, render};
