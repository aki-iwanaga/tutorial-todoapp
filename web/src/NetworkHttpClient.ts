// @ts-ignore
import { HttpClient } from 'HttpClient';

export class NetworkHttpClient implements HttpClient {
    host: string;

    constructor(host: string) {
        this.host = host;
    }

    async post(path: string, body: any): Promise<any> {
        const response = await fetch(this.host + path, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        try {
            const jsonResponse = await response.json();
            return jsonResponse;
        } catch (e) {
            return undefined;
        }
    }

    async get(path: string): Promise<any> {
        const response = await fetch(this.host + path, { method: 'GET' });
        if (response.status === 204) {
            return undefined;
        }
        if (!response.ok) {
            throw Error('Status is not ok');
        }
        return response.json();
    }

    async patch(path: string, body: any): Promise<any> {
        const response = await fetch(this.host + path, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (
            !response.headers.has('content-length') ||
            response.headers.get('content-length') === '0'
        )
            return undefined;

        return response.json();
    }

    async delete(path: string): Promise<any> {
        const response = await fetch(this.host + path, {
            method: 'DELETE',
        });

        if (
            !response.headers.has('content-length') ||
            response.headers.get('content-length') === '0'
        )
            return undefined;

        return response.json();
    }
}
