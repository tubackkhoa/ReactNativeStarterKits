# ReactNativeStarterKits

## Note
- cocoapods installed on iOS => open `project_name.xcworkspace` instead of `project_name.iosproject`
- NEVER RUN `react-native link`, use `react-native link optional_package`


## Dependencies
- react-native-vector-icons
- native-base
- agiletech-navigation
- redux, react-redux, redux-logger, redux-saga, redux-form, redux-persist
- lodash, color, apisauce

## Folder structure

```
~/assets                project resource files
~/components            All related component
  /Afternteractions       You should not care about this
  /Header
  /Footer
  /Navigator
  /SideBar
    options.js            All SideBar items
  /Toast
~/elements              Dump component without state
~/constants             App constants
~/container             App screens
~/store                 App store
  /actions                Actions
  /api                    API
  /reducers               Reducers
  /saga                   Sagas
  /selectors              State selectors
~/theme                 NativeBase theme
~/App.js                Navigation Component
~/index.js              Root Component
```

## API
- Sử dụng `apisauce` để quản lý rest `endpoint`, cấu hình tại `~/constants/configs.js`
- Các path khác chỉ cần gọi như sau: `API.get('post/view', {id: 1'})` hoặc `API.post('user/auth', {username: 'anhtuan', pass: 'abc'})`

## mapping root

You simple use `import abc from '~/components/Header';` instead of `import abc from '../../components/Header`;

`~` already mapped to `src` folder

## Setup project

```
git clone git_link new_name
cd new_name && yarn
react-native-rename new_name
react-native run-ios|run-android => then close current packager
npm start -- --reset-cache
```

- Remember to change `persist keyPrefix` in `~/store/index.js` line `25`
