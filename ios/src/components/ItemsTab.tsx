import * as React from 'react-native';
import { PokemonList } from './PokemonList';

const { Component, NavigatorIOS } = React;

interface ItemsTabProps { }
interface ItemsTabState { }

export class ItemsTab extends Component<ItemsTabProps, ItemsTabState> {

    render() {
        return <NavigatorIOS
            initialRoute={{
                component: PokemonList,
                title: 'Items'
            }}
            translucent={true}
            tintColor="darkslateblue" />
    }

}