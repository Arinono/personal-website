<script>
	import { theme } from '@stores'
	import { onMount } from 'svelte'
	import { ADarkModeToggle } from '@atoms'
	import { storage } from '@utils'

	let themeStorage
	let loaded = false

	onMount(async () => {
		themeStorage = storage(localStorage)('theme')
		theme.init(themeStorage, document.body)
		loaded = true
	})
</script>

<svelte:head>
	<title>Aurelien Arino</title>
</svelte:head>

{#if loaded}
	<div class="fixed top-4 right-4">
		<ADarkModeToggle on:toggle={() => theme.toggle(themeStorage, document.body)} theme={$theme} />
	</div>

	<slot />
{/if}

<style>
	@import '../main.css';
</style>
