export interface Message {
    message: string;
}

export interface TestAction {
    type: string;
    payload: Message;
}

export const TEST = 'TEST';

export const setMessage = ( payload: Message ): TestAction => ( {
    type: TEST,
    payload,
} );
