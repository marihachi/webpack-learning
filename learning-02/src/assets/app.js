const riot = require('riot');
const connectWebSocketAsync = require('./connectWebSocketAsync');

// tags
require('./tags/fugu.tag');

(async () => {
	const ws = await connectWebSocketAsync(`ws://${location.host}`);
	ws.onerror = errorEvent => { console.log('error:'); console.dir(errorEvent); };
	ws.onclose = closeEvent => { console.log('close:'); console.dir(closeEvent); };
	ws.onmessage = messageEvent => { console.log('message:'); console.dir(messageEvent); };

	riot.mount('*', {ws: ws});
})();
