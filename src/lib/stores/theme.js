import { writable, get } from 'svelte/store'

const _theme = writable('dark')

const updateDom = (el, v) => {
	el.classList[v === 'dark' ? 'add' : 'remove']('dark')
}

export const theme = {
	toggle: (ls, el) => {
		const val = get(_theme)
		const target = val === 'dark' ? 'light' : 'dark'
		
		updateDom(el, target)
		_theme.update(() => target)
		ls.set(target)
	},
	init: (ls, el) => {
		const val = ls.get()
		const initial = ['dark', 'light'].includes(val)
			? val
			: window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'

		updateDom(el, get(_theme))
		_theme.set(initial)
		ls.set(initial)
	},
	..._theme,
}
