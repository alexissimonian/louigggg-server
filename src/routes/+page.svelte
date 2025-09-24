<script>
    import { goto } from '$app/navigation'
    let { data } = $props();
</script>

<h1>Hello</h1>
<p>here is a list of db items</p>

{#each data.items as item}
   <p>{item.name}</p>
{/each}

<button onclick={ () => goto('/create-item') }>Create</button>
