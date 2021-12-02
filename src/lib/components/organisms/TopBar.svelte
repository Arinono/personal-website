<script>
  import { ANameTitle } from '@atoms'
	import { MMenuBar } from '@molecules'

  export let current
  export let routes
</script>

<div class="flex flex-row items-center flex-end md:justify-between">
  <div class="hidden md:block">
    <ANameTitle />
  </div>
  <MMenuBar {current} {routes} />
</div>
