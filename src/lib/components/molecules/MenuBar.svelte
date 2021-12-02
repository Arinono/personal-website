<script>
	import { onMount } from 'svelte'
	import { safeUrl } from '@utils'
	
	export let current
	export let routes
	
	onMount(() => {
		routes = routes.map(r => {
			const target = (() => {
				const url = safeUrl(r.href)
				if (url || r.href.endsWith('.pdf')) {
					return '_blank'
				}
				return null
			})()

			return { ...r, target }
		})
	})
</script>

<div class="flex flex-row items-center space-x-4 mx-4">
	{#each routes as { name, href, target }}
		<a
			class={`text-gray-700 dark:text-white border-b-2 ${
				name === current ? 'border-blue-500' : 'border-transparent'
			}`}
			{href} {target}>{name}</a
		>
	{/each}
</div>
