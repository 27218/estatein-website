export default ({ env }) => ({
	plugins: {
		'postcss-pxtorem': env == 'production' && {
			propList: ['*'],
			mediaQuery: true,
		},
	}
})