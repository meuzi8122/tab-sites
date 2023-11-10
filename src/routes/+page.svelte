<script lang="ts">

export let data: import("./$types").PageData;

</script>

<svelte:head>
    <title>tabs</title>
</svelte:head>

{#each data.sites as site}
    <div class="collapse bg-base-200">
        <input type="radio" name="my-accordion-1" checked={true} />
        <div class="collapse-title text-xl font-medium">
            {site.name}
        </div>
        <div class="collapse-content">
            <a href={site.url} target="_blank" rel="noopener noreferrer">link</a>
        </div>
    </div>
{/each}