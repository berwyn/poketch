import React from 'react';
import { Navigator, StyleSheet } from 'react-native';
import { BlurView } from './BlurView';
import { colors } from '../../styles/core';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 64,
        tintColor: colors.appPrimary,
    },
})

export class NavBar extends Navigator.NavigationBar {

    render() {
        return (
            <BlurView style={styles.container} blurType="light">
                {super.render()}
            </BlurView>
        );
    }

}