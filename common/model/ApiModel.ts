export interface Pokemon {
    
    id: number;
    name: string;
    base_experience: number;
    height: number;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: PokemonForm[];
    sprites: Sprite[];
    species: Species;
    stats: Stat[]
    types: PokemonType[];
    
    
}

export interface PokemonForm {
    
}

export interface PokemonType {
    
}

export interface Species {
    
}

export interface Sprite {
    
}

export interface Stat {
    
}

export interface Type {
    
}

export interface Ability {
    
}