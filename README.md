# ReactNativeStarterKits

## Folder structure

```
~/assets                project resource files
~/components            All related component
~/elements              Dump component without state
~/constants             App constants
~/container             App screens
~/store                 App store with reducer, action, state selector, saga
~/theme                 NativeBase theme
```

## mapping root

You simple use `import abc from '~/components/Header';` instead of `import abc from '../../components/Header`;

`~` already mapped to `src` folder

## Setup project

```
git clone git_link new_name
cd new_name && yarn
react-native-rename new_name
react-native run-ios|run-android
```
