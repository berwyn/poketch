import React, { Component, Image, ListView, ListViewDataSource, Text, View } from 'react-native';
import { API } from '../../../common/api/PokeAPI';
import { PokemonStore } from '../../../common/store/PokemonStore';
import { Pokemon } from '../../../common/model/ApiModel';

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
            .then((mon: Pokemon[]) => {
                console.log('Got list results');
                this.setState({
                    pokemon: mon,
                    dataSource: this.state.dataSource.cloneWithRows(mon)
                });
            })
            .catch(err => console.error(err));
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderPokemon} />
        );
    }

    private renderPokemon(pokemon: Pokemon) {
        if (React.Platform.OS === 'android') {
            return <MaterialListItem pokemon={pokemon} />
        } else {
            return <Text>{pokemon.id} - {pokemon.name}</Text>;
        }
    }
}

interface ListItemProps {
    pokemon: Pokemon
}

interface ListItemState {
    pokemon: Pokemon
}

class MaterialListItem extends Component<ListItemProps, ListItemState> {

    constructor(props: ListItemProps) {
        super(props);
        this.state = {
            pokemon: props.pokemon || new Pokemon()
        };
    }

    render() {
        return (
            <View>
                <Image
                    style={{ height: 48, width: 48 }}
                    source={{ uri: this.props.pokemon.sprites.front_default }}
                    resizeMode="contain" />
                <Text>#{this.props.pokemon.id} - {this.props.pokemon.name}</Text>
            </View>
        )
    }

}