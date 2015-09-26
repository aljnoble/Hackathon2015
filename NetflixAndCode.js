sinchClient = new SinchClient({
    //TODO: Insert our actual App Key below.
	applicationKey: 'INSERT_KEY_HERE',
	capabilities: {messaging: true, calling: true},
	startActiveConnection: true,
	// The next three lines are for more verbose debugging
	//onLogMessage: function(message) {
	//	console.log(message);
	//}
});

var sessionName = 'CodeButts-' + sinchClient.applicationKey;