import React from 'react';
import { useAppSelector } from '../app/hooks';
import { Text, View, StyleSheet } from 'react-native';

export const Counter = () => {
  const counter = useAppSelector(state => state.counter.value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <Text style={styles.count}>{counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontweight: 'bold',
  },
  count: {
    fontSize: 62,
    color: 'green',
    fontWeight: 'bold',
  },
});
