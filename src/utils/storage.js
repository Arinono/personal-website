const PREFIX = 'arinono'

export const storage = (s) => (k) => ({
	set: (v) => {
		s[`${PREFIX}-${k}`] = v
	},
	get: () => s[`${PREFIX}-${k}`],
})
