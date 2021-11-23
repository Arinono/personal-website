<script>
  import AGithubLogo from '../atoms/GithubLogo.svelte'

  export let user
</script>

<a 
  href={`https://github.com/${user}`}
  target="_blank"
  class="flex items-center space-x-2 w-fit-content bg-black text-white py-1 px-3 rounded-full hover:bg-gray-900 active:bg-gray-800 border border-black"
>
  <AGithubLogo width="16" height="16" />
  <span class="text-sm">GitHub</span>
</a>
