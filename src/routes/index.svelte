<script>
	import { TMyCard } from '@templates'
	export const prerender = true

	const user = 'arinono'
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
	]
</script>

<svelte:head>
	<title>Aurelien Arino</title>
</svelte:head>

<div class="flex items-center justify-center w-screen h-screen">
	<TMyCard {user} {routes} />
</div>
