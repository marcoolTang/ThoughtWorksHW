const { injectBabelPlugin } = require("react-app-rewired");

module.exports = function override(config, env) {
   	config = injectBabelPlugin(
		['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }],
		config);
   	config = injectBabelPlugin(
		 ["@babel/plugin-proposal-decorators", { "legacy": true }],
		config);
   	config = injectBabelPlugin(
		["@babel/plugin-proposal-class-properties", { "loose" : true }],
		config);


	return config;
};