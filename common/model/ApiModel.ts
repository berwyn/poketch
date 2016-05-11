export class Pokemon {
    
    id: number;
    name: string;
    base_experience: number;
    height: number;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: PokemonForm[];
    sprites: Sprite;
    species: Species;
    stats: Stat[]
    types: PokemonType[];
    
    
}

export class PokemonForm {
    
}

export class PokemonType {
    
}

export class Species {
    
}

export interface Sprite {
    
    front_default: string;
    
}

export class Stat {
    
}

export class Type {
    
}

export class Ability {
    
}