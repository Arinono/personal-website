<script>
	import { OGlassCardContainer, OTopBar } from '@organisms'
	import { MGithubButton } from '@molecules'
	import { AButton } from '@atoms'

	export let routes
	export let user
</script>

<OGlassCardContainer>
	<OTopBar slot="header" current="introduction" {routes} />
	<div
		slot="content"
		class="flex flex-col-reverse items-center md:flex-row md:items-center md:justify-between md:space-x-32"
	>
		<div>
			<div class="text-4xl font-thin text-gray-600 dark:text-white">Hello,</div>
			<div class="text-4xl font-thin text-gray-600 dark:text-white flex items-center">
				I'm <h1 class="font-light ml-1.5">Aurelien Arino</h1>
			</div>
			<h2 class="text-3xl font-thin text-gray-700 dark:text-white">
				Software engineer <a
					class="font-light text-story-blue dark:text-story-red"
					href="https://withthegrid.com/"
					target="_blank">@withthegrid</a
				>
			</h2>
			<div class="mt-4 flex items-center space-x-4">
				<MGithubButton {user} />
				<AButton href="mailto:aurelien@arino.io">contact me</AButton>
			</div>
		</div>
		<img
			class="w-64 md:w-2/5 rounded-full border-8 border-blue-500"
			src={`https://github.com/${user}.png`}
			alt="My somewhat pretty face"
		/>
	</div>
</OGlassCardContainer>
