/* eslint-disable max-len */
import {
    applyMiddleware, createStore, Store,
} from 'redux';
import defaultReducers from 'data/reducers';
import rootSaga from 'data/sagas';
import defaultMiddleware, { composeEnhancers, sagaMiddleware } from './middleware';

/**
 * StoreFactory
 * Creates a new Store instance
 *
 * @export
 * @param {any} args
 * @returns
 */
export function StoreFactory(
    initialState = {},
    initialReducers = defaultReducers,
    initialMiddleware = defaultMiddleware,
): Store {
    const store = createStore(
        initialReducers,
        initialState,
        composeEnhancers(
            applyMiddleware(
                ...initialMiddleware(),
            ),
        ),
    );

    sagaMiddleware.run( rootSaga );

    return store;
}

/**
 * Cached in order to not recreate.
 */
let STORE: Store;

/**
 * Create Store instance or use browser cached
 * if already created
 *
 * @export
 * @param {any} args
 * @returns Store Instance
 */
export default function configureStore( ...args: any[] ): Store {
    const store: Store =  STORE || StoreFactory( ...args );

    if ( ! STORE ) {
        STORE = store;
    }

    return store;
}
