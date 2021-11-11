import { writable, get } from 'svelte/store'

const _theme = writable('dark')

const updateDom = (el, v) => {
	if (v === 'dark') {
		el.classList.add('dark')
	} else {
		el.classList.remove('dark')
	}
}

export const theme = {
	toggle: (ls, el) => {
		_theme.update((t) => (t === 'dark' ? 'light' : 'dark'))
		ls.set(get(_theme))

		updateDom(el, get(_theme))
	},
	init: (ls, el) => {
		const initial = ['dark', 'light'].includes(ls)
			? ls
			: window.matchMedia('(prefers-color-scheme: dark)').matches
			? 'dark'
			: 'light'

		_theme.set(initial)
		ls.set(initial)
		updateDom(el, get(_theme))
	},
	..._theme,
}
