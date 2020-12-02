const wss = new (require('ws').Server)({port: 40510})

wss.on('connection', function (ws) {
	ws.on('message', function (msg) {
		console.log(msg);
		ws.send('socket open')
	})
})
