<script>
  export let href
</script>

<a {href} class="py-1 px-3 lowercase bg-white rounded-full border border-gray-100 hover:bg-gray-200 active:bg-gray-300 flex items-center">
  <span class="text-sm"><slot /></span>
</a>
