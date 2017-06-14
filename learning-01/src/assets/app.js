const riot = require('riot');

// tags
require('./tags/fugu.tag');

const m = require('./hoge');

(async () => {
	await m();
	riot.mount('*');
})();
