import React, { Component, ListView, ListViewDataSource, Text } from 'react-native';
import { API } from '../../common/api/PokeAPI';
import { PokemonStore } from '../../common/store/PokemonStore';
import { Pokemon } from '../../common/model/ApiModel';

interface PokemonListProps { }

interface PokemonListState {

    pokemon: Pokemon[];
    dataSource: ListViewDataSource;

}

export class PokemonList extends Component<PokemonListProps, PokemonListState> {

    constructor(props: PokemonListProps) {
        super(props);
        
        this.state = {
            pokemon: [],
            dataSource: new ListView.DataSource({
                rowHasChanged: (lhs, rhs) => {
                    return lhs !== rhs
                },
            })
        };
        
        API.getPokemonList()
            .then(pokemon => {
                let promises = [];
                for(let i = 0; i < pokemon.length; i++) {
                    let id = /pokemon\/(\d{1,3})\/$/.exec(pokemon[i].url)[1];
                    let promise = PokemonStore.getPokemon(parseInt(id, 10));
                    promises.push(promise);
                }
                
                Promise.all(promises)
                    .then((mon:Pokemon[]) => {
                        this.setState({
                            pokemon: mon,
                            dataSource: this.state.dataSource.cloneWithRows(mon)
                        });
                    });
            })
            .catch(err => console.error(err));
    }
    
    renderPokemon(monster: Pokemon) {
        return <Text>{monster.id} - {monster.name}</Text>;
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderPokemon} />
        );
    }

}