import { AsyncStorage } from 'react-native';
import { API } from '../api/PokeAPI';
import { Pokemon } from '../model/ApiModel';

export class PokemonStore {
    
    static async getPokemon(id: number): Promise<Pokemon> {
        let pokeJSON = await AsyncStorage.getItem(`poke/${ id }`);
        if(pokeJSON) {
            let poke = JSON.parse(pokeJSON) as Pokemon;
            return poke;
        } else {
            let poke = await API.getPokemon(id);
            AsyncStorage.setItem(`poke/${ id }`, JSON.stringify(poke));
            return poke;
        }
    }
    
}