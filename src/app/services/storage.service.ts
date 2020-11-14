import { Injectable } from '@angular/core';
import { Proyecto } from '../models/proyecto';

@Injectable({
    providedIn: 'root',
})

export class StorageService {

    constructor() { }

    // tslint:disable-next-line:typedef
    async setString(key: string, value: string) {
        await localStorage.setItem(key, value);
    }

    async getString(key: string): Promise<string> {
        return await localStorage.getItem(key);
    }

    // añadir al storage datos
    // tslint:disable-next-line:typedef
    async setObject(key: string, value: any) {
        await localStorage.setItem(key, JSON.stringify(value));
    }

    async getObject(key: string): Promise< Proyecto[] > {
        const ret = localStorage.getItem( key );
        return JSON.parse(ret);
    }

    async removeItem(key: string) {
        await localStorage.removeItem( key );
    }
    async clear() {
        await localStorage.localStorage();
    }
}
