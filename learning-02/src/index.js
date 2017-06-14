const path = require('path');
const express = require('express');
const websocket = require('websocket');

const absolutePath = relative => path.join(__dirname, relative);

// http server

const app = express();
app.use(express.static(absolutePath('assets')));
app.set('view engine', 'pug');
app.set('views', absolutePath('views'));

app.get('/', (req, res) => {
	res.render('main');
});

const httpServer = app.listen(3000);

// websocket server

const wsServer = new websocket.server({httpServer: httpServer});

wsServer.on('request', req => {
	const connection = req.accept();

	connection.on('message', data => {
		if (data.type == 'utf8') {
			console.log('message:', data.utf8Data);
		}
	});

	connection.on('close', (code, description) => {
		console.log('close:', code, description);
	});

	connection.on('error', err => {
		console.log('error:', err.message);
	});
});
