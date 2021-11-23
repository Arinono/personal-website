<script>
	export let current

	const routes = [
		{
			path: '/',
			name: 'introduction',
		},
		{
			path: '/resume.pdf',
			name: 'resume',
		}
	].map(r => {
		const download = (() => {
			if (r.path.includes('.pdf')) {
				return r.path.replace('/', '')
			}
			return null
		})()
		return download ? { ...r, download } : r
	})
</script>

<div class="flex flex-row items-center space-x-4 mx-4">
	{#each routes as r}
		<a
			sveltekit:prefetch
			class={`text-gray-700 dark:text-white border-b-2 ${
				r.name === current ? 'border-blue-500' : 'border-transparent'
			}`}
			href={r.path} download={r.download}>{r.name}</a
		>
	{/each}
</div>
