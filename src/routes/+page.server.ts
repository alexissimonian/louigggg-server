import { dev } from "$app/environment";
import { SECRET_WEBHOOK_PASSWORD, SECRET_WEBHOOK_USERNAME } from "$env/static/private";

export async function load() {
    let url: string = dev ? "https://n8n.alexissimonian.net/webhook-test/fccb922b-fcd4-4b9e-a58a-5acfd53a4c32" : "https://n8n.alexissimonian.net/webhook/fccb922b-fcd4-4b9e-a58a-5acfd53a4c32";
    try {
        const response = await fetch(url, { method: 'GET', headers: { 'Authorization': `Basic ${btoa(SECRET_WEBHOOK_USERNAME + ':' + SECRET_WEBHOOK_PASSWORD)}`, 'Content-Type': 'application/json' } });
        const items = await response.json();

        return {
            items: items
        };
    } catch (error) {
        console.error('Failed to fetch items:', error);
        return {
            items: []
        };
    }
}
