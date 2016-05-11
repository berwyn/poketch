declare namespace __reactNativeBlur {
    
    interface BlurViewProps {
        blurType?: 'xlight'|'light'|'dark';
        styles?: any;
    }
    
    interface BlurViewState{}
    
    export class BlurView extends React.Component<BlurViewProps, BlurViewState> {
        constructor(props: BlurViewProps);
    }
    
    export class VibrancyView extends React.Component<BlurViewProps, BlurViewState> {
        constructor(props: BlurViewProps);
    }
    
}

declare module "react-native-blur" {
    export = __reactNativeBlur;
}