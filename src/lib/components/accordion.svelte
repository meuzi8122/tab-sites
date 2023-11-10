<script lang="ts">

import type { Site } from "$lib/client/site";

export let site: Site;
export let name: string;
export let isSelected: boolean;
/* TODO: 型確認 */
export let onChange: (e: any) => void;

</script>

<div class="collapse collapse-arrow join-item border border-base-300">
    <input type="radio" name={name} checked={isSelected} value={site.id} on:change={onChange} />
    <div class="collapse-title text-xl font-medium">
        {site.name}
    </div>
    <div class="collapse-content">
        <div class="mb-4 flex flex-row space-x-1">
             <div class="badge badge-neutral">{site.language}</div>
            {#each site.kinds as kind}
                <div class="badge badge-primary">{kind}</div>
            {/each}
        </div>
        <a href={site.url} target="_blank" rel="noopener noreferrer" class="btn btn-block btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>  
            サイトを表示
        </a>
    </div>
</div>