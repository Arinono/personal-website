<script>
	import { onMount } from 'svelte'
	import { theme } from '../stores/theme'
	import { storage } from '../utils/storage'

	import ADarkModeToggle from '../components/atoms/DarkModeToggle.svelte'

	let themeStorage

	onMount(async () => {
		themeStorage = storage(localStorage)('theme')
		theme.init(themeStorage, document.body)
	})
</script>

<svelte:head>
	<title>Aurelien Arino</title>
</svelte:head>

<div class="fixed top-4 right-4">
	<ADarkModeToggle on:toggle={() => theme.toggle(themeStorage, document.body)} theme={$theme} />
</div>

<slot />

<style>
	@import '../main.css';
</style>
