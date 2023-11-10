<script lang="ts">

import type { Site } from "$lib/client/site";

export let site: Site;
export let name: string;
export let isSelected: boolean;
/* TODO: 型確認 */
export let onChange: (e: any) => void;

</script>

<div class="collapse collapse-arrow join-item border border-base-200">
    <input type="radio" name={name} checked={isSelected} value={site.id} on:change={onChange} />
    <div class="collapse-title text-xl font-medium">
        {site.name}
    </div>
    <div class="collapse-content">
        <p>{site.language} / {site.types.join(",")}</p>
        <a href={site.url} target="_blank" rel="noopener noreferrer">link</a>
    </div>
</div>