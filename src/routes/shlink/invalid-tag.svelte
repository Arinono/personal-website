<script context="module">
	export const prerender = true
</script>

<script>
	import { OGlassCardContainer } from '@organisms'
</script>

<svelte:head>
	<title>Invalid tag</title>
</svelte:head>

<div class="flex items-center justify-center w-screen h-screen">
	<OGlassCardContainer>
		<span slot="content" class="dark:text-white mt-8">This shortened link is invalid 🥹</span>
	</OGlassCardContainer>
</div>
