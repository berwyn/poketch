import { API } from '../../../common/api/PokeAPI';
import { PokemonStore } from '../../../common/store/PokemonStore';
import { Pokemon } from '../../../common/model/ApiModel';

import React, {
    ActivityIndicatorIOS,
    Component,
    Image,
    ListView,
    ListViewDataSource,
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

interface PokemonListProps { }

interface PokemonListState {

    loading:  boolean;
    dataSource: ListViewDataSource;

}

const styles = StyleSheet.create({
    image: {
        width: 96,
        height: 96,
    },
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export class PokemonList extends Component<PokemonListProps, PokemonListState> {

    constructor(props: PokemonListProps) {
        super(props);

        this.state = {
            loading: true,
            dataSource: new ListView.DataSource({
                rowHasChanged: (lhs, rhs) => {
                    console.log(lhs, rhs);
                    return lhs !== rhs
                },
            })
        };
    }
    
    componentDidMount() {
        this.loadData();
    }
    
    async loadData() {
        let mon = await API.getPokemonList();
        console.log('Data did load');
        this.setState({
            loading: false,
            dataSource: this.state.dataSource.cloneWithRows(mon)
        });
    }

    render() {
        if(this.state.loading) {
            return (
                <View style={styles.loading}>
                    <ActivityIndicatorIOS size="large" />
                    <Text>Loading...</Text>
                </View>
            );
        }
        
        return (
            <ListView
                style={{ backgroundColor: '#F5FCFF', paddingTop: 64, paddingBottom: 48 }}
                dataSource={this.state.dataSource}
                renderRow={this.renderPokemon} />
        );
    }

    private renderPokemon(pokemon: Pokemon) {
        return (
            <TouchableHighlight>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: pokemon.sprites.front_default}} style={styles.image} />
                    <Text>{pokemon.name}</Text>
                </View>
            </TouchableHighlight>
        );
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