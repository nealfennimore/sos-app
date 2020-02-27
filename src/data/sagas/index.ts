import { put } from 'redux-saga/effects';
import { setMessage } from 'data/actions/example';

export default function* main(): Generator {
    yield put( setMessage( { message: 'This is connected to redux' } ) );
}
