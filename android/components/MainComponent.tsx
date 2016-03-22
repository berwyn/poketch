import React, { Component, Text, View } from 'react-native';
import { STYLES } from '../styles/CoreStyles';
import { PokemonList } from '../../common/components/PokemonList';

export class Poketch extends Component<any, any> {
    render() {
        return (
            <PokemonList />
        );
    }
}