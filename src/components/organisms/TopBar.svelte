<script>
  import ANameTitle from '../atoms/NameTitle.svelte'
	import MMenuBar from '../molecules/MenuBar.svelte'

  export let current
</script>

<div class="flex flex-row items-center flex-end md:justify-between">
  <div class="hidden md:block">
    <ANameTitle />
  </div>
  <MMenuBar {current} />
</div>
