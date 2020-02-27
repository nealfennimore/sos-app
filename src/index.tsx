import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Store } from 'redux';

import configureStore from 'data/store';
import ConnectedText from './text';

const store: Store = configureStore();

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
} );

export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
                <ConnectedText />
            </View>
        </Provider>
    );
}
