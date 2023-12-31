import { client } from "./client";

export type Site = {
    id: string;
    name: string;
    kinds: string[];
    language: string;
    url: string;
}

export class SiteClient {
    private static endpoint = "sites";

    static async findSites(): Promise<Site[]> {
        return (await client.get({
            endpoint: this.endpoint,
            queries: {
                fields: "id,name,kinds,language,url"
            }
        })).contents;
    }
}