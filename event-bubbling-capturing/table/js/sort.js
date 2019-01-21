'use strict';

function handleTableClick(event) {
	if (event.target.tagName === 'TH') {
		event.target.dataset.dir = (event.target.dataset.dir === '1') ? -1 : 1;

		const prop = event.target.dataset.propName;
		const dir = event.target.dataset.dir;
		
		sortTable(prop, dir);
		table.dataset.sortBy = prop;
	}
}
