import React, { Component } from 'react';

const { requireNativeComponent } = require('react-native');

interface BlurViewProps {
    blurType: 'dark' | 'light' | 'xlight';
    style: React.CSSProperties;
}

const NativeBlurView = requireNativeComponent('PKBlurView', null);

export class BlurView extends Component<BlurViewProps, any> {

    render() {
        return (
            <NativeBlurView
                {...this.props}
                style={this.props.style}
                />
        );
    }

}