import { combineReducers } from 'redux';
import example from './example';

const rootReducer = combineReducers( { example } );

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer;
