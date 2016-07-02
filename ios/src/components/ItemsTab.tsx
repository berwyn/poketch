import React, { Component } from 'react';
import { NavigatorIOS } from 'react-native';
import { PokemonList } from './PokemonList';

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