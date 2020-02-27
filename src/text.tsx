import React from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from 'data/reducers';

export default function TextElement(): JSX.Element {
    const text: string = useSelector( ( state: RootState ) => state.test.message );
    return (
        <Text>{text}</Text>
    );
}
