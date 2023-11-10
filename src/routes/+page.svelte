<script lang="ts">

import Accordion from "$lib/components/accordion.svelte";

export let data: import("./$types").PageData;

let selectedSiteId: string | null = null;

/* TODO: 型確認 */
function onSiteSelected(event: any) {
    selectedSiteId = event.currentTarget.value;
}

</script>

<svelte:head>
    <title>tabs</title>
</svelte:head>

<div class="w-content-side-smartphone md:w-content-side mt-4">
  <div class="join join-vertical w-full">
    {#each data.sites as site}
        <Accordion site={site} name="sites" isSelected={site.id == selectedSiteId} onChange={onSiteSelected}></Accordion>
    {/each}
  </div>
</div>