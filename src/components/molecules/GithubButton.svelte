<script>
  import AGithubLogo from '../atoms/GithubLogo.svelte'

  export let user
</script>

<a 
  href={`https://github.com/${user}`}
  target="_blank"
  class="flex items-center space-x-2 w-fit-content bg-black text-white py-2 px-4 rounded-full hover:bg-gray-900 active:bg-gray-800"
>
  <AGithubLogo width="24" height="24" />
  <span>GitHub</span>
</a>
