import { SiteClient } from "$lib/client/site";

/** @type {import("./$types").PageServerLoad} */
export async function load() {
    return {
        sites: await SiteClient.findSites()
    }
}