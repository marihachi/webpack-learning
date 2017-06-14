module.exports = url => new Promise((resolve, reject) => {
	const ws = new WebSocket(url);
	ws.onerror = errorEvent => { reject(errorEvent); };
	ws.onclose = closeEvent => { reject(closeEvent); };
	ws.onopen = openEvent => {
		resolve(ws);
	};
});
