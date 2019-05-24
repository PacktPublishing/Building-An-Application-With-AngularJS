exports.config = {
	seleniumAddress: 'http://loclhost:4444/wd/hub',

	capabilities: {
		browserName: 'chrome'
	},

	specs: ['e2e/*.js'],

	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000
	}
};