<script>
	import { safeUrl } from '../../utils/safeUrl'
	export let current

	const routes = [
		{
			href: '/',
			name: 'introduction',
		},
		{
			href: '/aurelien_ARINO_resume.pdf',
			name: 'resume',
		},
		{
			href: 'https://www.linkedin.com/in/aurelien-arino/',
			name: 'linkedin'
		},
		{
			href: 'https://github.com/arinono',
			name: 'github'
		}
	].map(r => {
		const target = (() => {
			const url = safeUrl(r.href)
			if (url || r.href.endsWith('.pdf')) {
				return '_blank'
			}
			return null
		})()

		return { ...r, target }
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
