import { TEST, Message, TestAction } from 'data/actions/test';

const initialState: Message = {
    message: null,
};

export default function test( state = initialState, action: TestAction ): Message {
    switch ( action.type ) {
    case TEST:
        return {
            ...state,
            message: action.payload.message,
        };
    default:
        return state;
    }
}
