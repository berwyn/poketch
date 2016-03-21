import React, { Component, Text, View } from 'react-native';
import { STYLES } from '../styles/CoreStyles';

export class Poketch extends Component<any, any> {
    render() {
        return (
            <View style={STYLES.container}>
                <Text style={STYLES.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={STYLES.instructions}>
                    To get started, edit android/components/MainComponent.tsx
                </Text>
                <Text style={STYLES.instructions}>
                    Shake or press menu button for dev menu
                </Text>
            </View>
        );
    }
}