import React, { Component } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { BlurView } from './BlurView';
import { colors } from '../../styles/core';

interface TabBarProps {
    style: React.CSSProperties;
    selected?: number;
}
interface TabBarState {
    selectedIndex: number;
}

function isTabBarItem(view: any): view is React.ReactElement<any> {
    return true
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scene: {
        flex: 1,
    },
    tabBar: {
        position: 'absolute',
        left: 0,
        bottom: 0,
        right: 0,
        height: 48,
        tintColor: colors.appPrimary,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    tabItem: {
        backgroundColor: 'transparent',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
});

export class TabBar extends Component<TabBarProps, TabBarState> {

    constructor(props: TabBarProps) {
        super(props);
        this.state = {
            selectedIndex: props.selected? props.selected : 0,
        };
    }

    render() {
        let activeChild = React.Children.toArray(this.props.children)[this.state.selectedIndex];
        return (
            <View style={styles.container}>
                <View style={styles.scene}>
                    {activeChild}
                </View>
                <BlurView blurType="light" style={styles.tabBar}>
                    {React.Children.map(this.props.children, this.renderTab) }
                </BlurView>
            </View>
        );
    }

    private renderTab(childView: React.ReactElement<TabBarItemProps> | string | number, index: number) {
        let el = childView as React.ReactElement<TabBarItemProps>;
        let icon = <Image source={el.props.icon} style={{ height: 20, width: 20 }} />
        let text = <Text style={{ fontSize: 14 }} >{el.props.title}</Text>
        return (
            <TouchableOpacity 
                style={styles.tabItem}
                onPress={() => {this.state.selectedIndex = index}}>
                {icon}
                {text}
            </TouchableOpacity>
        );
    }

}

interface TabBarItemProps {
    title: string;
    icon: { uri: string } | string;
    selected?: boolean;
}
interface TabBarItemState { }

export class TabBarItem extends Component<TabBarItemProps, TabBarItemState> {

    constructor(props: TabBarItemProps) {
        super(props);
    }

    render() {
        return (
            <View style={styles.scene}>
                {this.props.children}
            </View>
        )
    }

}