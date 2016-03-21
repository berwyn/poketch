# Pokétch

    A personal tool manufactured by the Pokétch Company for Trainers from Sinnoh, in the form of a watch with a touch screen.

While this Pokétch isn't a fancy watch, it's a similarly fancy tool to improve
your experience in Pokémon titles! Powered by [Pokéapi][pokeapi], built in
[React Native][rcnative] with [TypeScript][ts] as a learning exercise and to
evaluate the platform as a potential cross-platform native mobile solution.

## Building

### iOS

1. Ensure that XCode is installed and configured
2. `$ npm i -g typescript react-native-cli && npm install`
3. `$ tsc && react-native run-ios`

### Android

1. First, ensure that the `ANDROID_HOME` environment or `sdk.path` value
in `android/local.properties` is set to your Android SDK location.
2. Make sure that `platform-tools` 23.0.1 and SDK 23 are installed
3. Make sure to have a debuggable device or AVD running and connected 
4. `$ npm i -g typescript react-native-cli && npm install`
5. `$ tsc && react-native run-android`

## Contributing

Please note that this project is released with a [Contributor Code of Conduct][coc].
By participating in this project you agree to abide by its terms.

Please feel free to send pull requests with feature enhancements
and bugfixes!

[pokeapi]: http://pokeapi.co/
[rcnative]: https://facebook.github.io/react-native/
[ts]: http://www.typescriptlang.org/
[coc]: CODE_OF_CONDUCT.md