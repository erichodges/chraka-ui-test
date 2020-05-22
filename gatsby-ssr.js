import { createElement } from 'react';

const applyDarkModeClass = `
(function() {
  try {
    var mode = localStorage.getItem('darkMode');
    if (mode === 'true') {
			document.body.classList.add('light-mode');
		}
  } catch (e) {}
})();
`;

export const onRenderBody = ({ setPreBodyComponents }) => {
	const script = createElement('script', {
		dangerouslySetInnerHTML: {
			__html: applyDarkModeClass,
		},
	});
	setPreBodyComponents([script]);
};