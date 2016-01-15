import assertElement from 'assert-element';
import componentMock from 'component-mock';
import test from 'ava';
import m from './dist';

test(() => {
	const mock = componentMock(m);
	const el = mock.render({props: {
		class: 'CustomClass',
		message: 'Hello world!'
	}});

	assertElement.isNode(el, 'div');
	assertElement.hasClass(el, 'Component');
	assertElement.hasClass(el, 'CustomClass');
});
