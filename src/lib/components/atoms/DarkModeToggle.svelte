<script>
	import { createEventDispatcher } from 'svelte'

	export let theme = 'dark'

	const d = createEventDispatcher()

	const toggle = () => {
		theme = theme === 'dark' ? 'light' : 'dark'
		d('toggle', null)
	}
</script>

<div on:click={toggle} class="cursor-pointer select-none">
	{#if theme === 'dark'}
		🌞
	{:else}
		🌑
	{/if}
</div>
