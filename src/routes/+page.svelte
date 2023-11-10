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
    <title>Guitar tabs and chords</title>
</svelte:head>

<div class="px-w-content-side-smartphone md:px-w-content-side mt-8">
  <div class="join join-vertical w-full">
    {#each data.sites as site}
        <Accordion site={site} name="sites" isSelected={site.id == selectedSiteId} onChange={onSiteSelected}></Accordion>
    {/each}
  </div>
</div>