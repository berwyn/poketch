import { VERSION } from '../AppInfo';
import { Pokemon, Type, Ability } from '../model/ApiModel';

type Header = { [index:string]: string };

const BASE_URL = 'https://pokeapi.co/api/v2';

const COMMON_HEADERS: Header = {
    'Accept': 'application/json',
    'User-Agent': `poketch-${ VERSION }`,
};

interface PokemonListItem {
    name: string;
    url: string;
}

class Pokeapi {
    
    getPokemon(id: Number): Promise<Pokemon> {
        return new Promise((resolve, reject) => {
            this.fetchJSON(`${ BASE_URL }/pokemon/${ id }`)
                .then(body => resolve(body as Pokemon));
        });
    }
    
    getPokemonList(offset: number = 0): Promise<PokemonListItem[]> {
        return new Promise((resolve, reject) => {
            this.fetchJSON(`${ BASE_URL }/pokemon?limit=20&offset=${ offset }`)
                .then(body => resolve(body.results as Pokemon[]));
        });
    }
    
    getType(id: Number): Promise<Type> {
        return new Promise((resolve, reject) => {
            this.fetchJSON(`${ BASE_URL }/type/${ id }`)
                .then(body => resolve(body as Type));
        });
    }
    
    getAbility(id: Number): Promise<Ability> {
        return new Promise((resolve, reject) => {
            this.fetchJSON(`${ BASE_URL }/ability/${ id }`)
                .then(body => resolve(body as Ability));
        });
    }
    
    private fetchJSON(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            fetch(url, {
                headers: COMMON_HEADERS
            }).then(
                res => resolve(res.json()),
                err => reject(err)
            );
        });
    }
    
}

export const API = new Pokeapi();