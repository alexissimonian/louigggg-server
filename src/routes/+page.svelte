<script>
    let { data } = $props();
</script>

<h1>Hello</h1>
<p>here is a list of db items</p>

{#each data.items as item}
   <p>{item.test}</p>
{/each}
