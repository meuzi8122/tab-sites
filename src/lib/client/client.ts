import { createClient } from "microcms-js-sdk";
import { SERVICE_DOMAIN, API_KEY } from "$env/static/private";

export const client = createClient({
    serviceDomain: SERVICE_DOMAIN,
    apiKey: API_KEY
});