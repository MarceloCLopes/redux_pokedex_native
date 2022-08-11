import React from 'react';
import { useAppDispatch } from '../app/hooks';
import { Text, TouchableOpacity } from 'react-native';
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from '../features/counter/counterSlice';

export const ButtonRedux = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => dispatch(increment())}
        style={{
          backgroundColor: 'black',
          padding: 10,
          borderRadius: 5,
          margin: 10,
        }}>
        <Text
          style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
          Increment
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => dispatch(decrement())}
        style={{
          backgroundColor: '#29938d',
          padding: 10,
          borderRadius: 5,
          margin: 10,
        }}>
        <Text
          style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
          Decrement
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => dispatch(incrementByAmount(10))}
        style={{
          backgroundColor: '#5f32b8',
          padding: 10,
          borderRadius: 5,
          margin: 10,
        }}>
        <Text
          style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
          Add 10
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => dispatch(reset())}
        style={{
          backgroundColor: '#ff0000',
          padding: 10,
          borderRadius: 5,
          margin: 10,
        }}>
        <Text
          style={{ color: 'white', textAlign: 'center', fontWeight: 'bold' }}>
          Reset
        </Text>
      </TouchableOpacity>
    </>
  );
};
