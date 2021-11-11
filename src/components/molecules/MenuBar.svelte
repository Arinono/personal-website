<script>
	export let current

	const routes = [
		{
			path: '/',
			name: 'introduction',
		},
		{
			path: '/about',
			name: 'about',
		},
	]
</script>

<div class="flex flex-row items-center space-x-4 mx-4">
	{#each routes as r}
		<a
			sveltekit:prefetch
			class={`text-gray-700 dark:text-white border-b-2 ${
				r.name === current ? 'border-blue-500' : 'border-transparent'
			}`}
			href={r.path}>{r.name}</a
		>
	{/each}
</div>
