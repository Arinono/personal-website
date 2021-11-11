<script>
	import ANameTitle from '../components/atoms/NameTitle.svelte'
	import MMenuBar from '../components/molecules/MenuBar.svelte'
	import OGlassCardContainer from '../components/organisms/GlassCardContainer.svelte'

	export const prerender = true
</script>

<svelte:head>
	<title>Aurelien Arino - About</title>
</svelte:head>

<div class="flex items-center justify-center w-screen h-screen">
	<OGlassCardContainer>
		<div slot="header" class="flex flex-row items-center justify-between">
			<ANameTitle />
			<MMenuBar current="about" />
		</div>
		<div
			slot="content"
			class="flex flex-col-reverse items-center md:flex-row md:items-center md:justify-between md:space-x-32"
		>
			coucou
		</div>
	</OGlassCardContainer>
</div>
