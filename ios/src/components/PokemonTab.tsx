import React, { Component } from 'react';
import {
    Navigator,
    NavigatorStatic,
    Route,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import { PokemonList } from './PokemonList';
import { NavBar } from './framework/NavBar';

interface PokemonTabProps { }
interface PokemonTabState { }

type NavState = NavigatorStatic.NavState;
type NavigationBarRouteMapper = NavigatorStatic.NavigationBarRouteMapper;

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
});

const navigationBarRouteMapper: NavigationBarRouteMapper = {
    LeftButton: () => null,
    
    Title: (route: Route, navigator: NavigatorStatic, index: number, navState: NavState) => {
        return <Text style={styles.title}>{route.title}</Text>;
    },
    
    RightButton: () => null,
};

export class PokemonTab extends Component<PokemonTabProps, PokemonTabState> {

    render() {
        return (
            <Navigator
                initialRoute={{ title: 'Pokémon', type: 'list' }}
                renderScene={this.renderScene}
                navigationBar={
                    <NavBar routeMapper={navigationBarRouteMapper} />
                } />
        );
    }
    
    renderScene(route, navigator: NavigatorStatic) {
        switch(route.type) {
            case 'list':
                return <PokemonList />;
        }
    }

}