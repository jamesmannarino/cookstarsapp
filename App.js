import React from 'react'
import AppNavigator from './navigation/AppNavigator.js'
import { decode, encode } from 'base-64'
import { YellowBox } from 'react-native'
import { Provider } from 'react-redux'
import store from './redux/store'

if (!global.btoa) {
    global.btoa = encode
}
if (!global.atob) {
    global.atob = decode
}

YellowBox.ignoreWarnings(['Setting a timer'])
YellowBox.ignoreWarnings([
    'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
])

export default function App() {
    // console.log(process.env.REACT_APP_NOT_SECRET_CODE)
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    )
}
