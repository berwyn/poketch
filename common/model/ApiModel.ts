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

export class Sprite {
    
    front_default: string;
    get frontDefault(): string {
        return this.front_default;
    }
    
}

export class Stat {
    
}

export class Type {
    
}

export class Ability {
    
}