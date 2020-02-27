import { compose, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import { isDevelopment } from 'env';

export const composeEnhancers = isDevelopment ? composeWithDevTools( {} ) : compose;
export const sagaMiddleware = createSagaMiddleware();

const middleware = (): Middleware[] => [
    sagaMiddleware,
];

export default middleware;
