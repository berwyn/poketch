declare module "react-native" {
    var Platform: {
        OS: 'ios' | 'android';
        Version: number;
    }

    export function requireNativeComponent<P>(name: string, arg?: any): React.ComponentClass<P>;
}

declare namespace __reactNativeViewportUnits {
    let vw: number;
    let vh: number;
    let vmin: number;
    let vmax: number;
}

declare module "react-native-viewport-units" {
    export = __reactNativeViewportUnits;
}