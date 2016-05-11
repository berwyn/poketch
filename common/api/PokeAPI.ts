import { VERSION } from '../AppInfo';
import { Pokemon, Type, Ability } from '../model/ApiModel';

import { Subscriber } from 'rxjs/Subscriber';
import { Observable } from 'rxjs/Observable';
import 'rxjs/operator/bufferCount';

type Header = { [index: string]: string };

const BASE_URL = 'https://pokeapi.co/api/v2';

const COMMON_HEADERS: Header = {
    'Accept': 'application/json',
    'User-Agent': `poketch-${VERSION}`,
};

interface PokemonListItem {
    name: string;
    url: string;
}

class Pokeapi {

    private cache: Promise<Pokemon[]>[];
    
    constructor() {
        this.cache = [];
    }

    async getPokemon(id: Number): Promise<Pokemon> {
        return this.fetchJSON(`${BASE_URL}/pokemon/${id}`);
    }

    async getPokemonList(offset: number = 0): Promise<Pokemon[]> {
        console.log(`Getting pokemon list at offset ${offset}`);
        if (this.cache[offset]) return this.cache[offset];

        let promise = this.fetchJSON(`${BASE_URL}/pokemon?limit=20&offset=${offset}`)
            .then(async (body) => {
                let pokemon = body.results as PokemonListItem[];
                let result: Pokemon[] = [];
                for (let mon of pokemon) {
                    console.log(`Fetching ${mon.name}`);
                    let id = /pokemon\/(\d{1,3}\/)$/.exec(mon.url)[1];
                    let realMon = await this.getPokemon(parseInt(id, 10));
                    result.push(realMon);
                }
                return result;
            });
            
        this.cache[offset] = promise;
        return promise;
    }

    async getType(id: Number): Promise<Type> {
        return new Promise((resolve, reject) => {
            this.fetchJSON(`${BASE_URL}/type/${id}`)
                .then(body => resolve(body as Type));
        });
    }

    getAbility(id: Number): Promise<Ability> {
        return new Promise((resolve, reject) => {
            this.fetchJSON(`${BASE_URL}/ability/${id}`)
                .then(body => resolve(body as Ability));
        });
    }

    private async fetchJSON(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.responseType = 'json';

            for (let header in COMMON_HEADERS) {
                xhr.setRequestHeader(header, COMMON_HEADERS[header]);
            }

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.responseText));
                    } else {
                        reject(xhr.status);
                    }
                }
            }

            xhr.send();
        });
    }

}

export const API = new Pokeapi();