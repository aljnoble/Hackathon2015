sinchClient = new SinchClient({
    //TODO: Insert our actual App Key below.
	applicationKey: 'INSERT_KEY_HERE',
	capabilities: {messaging: true, calling: true},
	startActiveConnection: true,
	onLogMessage: function(message) {
		console.log(message);
	}
});