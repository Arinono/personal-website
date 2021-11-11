<script>
	import ANameTitle from '../components/atoms/NameTitle.svelte'
	import MMenuBar from '../components/molecules/MenuBar.svelte'
	import OGlassCardContainer from '../components/organisms/GlassCardContainer.svelte'

	export const prerender = true
</script>

<svelte:head>
	<title>Aurelien Arino - Introduction</title>
</svelte:head>

<div class="flex items-center justify-center w-screen h-screen">
	<OGlassCardContainer>
		<div slot="header" class="flex flex-row items-center justify-between">
			<ANameTitle />
			<MMenuBar current="introduction" />
		</div>
		<div
			slot="content"
			class="flex flex-col-reverse items-center md:flex-row md:items-center md:justify-between md:space-x-32"
		>
			<div>
				<h2 class="text-5xl font-thin text-gray-600 dark:text-white">Hello,</h2>
				<h2 class="text-5xl font-thin text-gray-600 dark:text-white">
					I'm <span class="font-light">Aurelien Arino</span>
				</h2>
				<h3 class="text-4xl font-thin text-gray-700 dark:text-white">
					Software engineer <a class="font-light" href="https://story.ai" target="_blank"
						>@story.ai</a
					>
				</h3>
			</div>
			<img
				class="w-64 md:w-2/5 rounded-full border-8 border-blue-500"
				src="https://github.com/arinono.png"
				alt="My somewhat pretty face"
			/>
		</div>
	</OGlassCardContainer>
</div>

<style>
	h3 > a {
		color: #4940f0;
	}
</style>
