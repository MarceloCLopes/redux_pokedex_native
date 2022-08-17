import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
import { PokemonList } from './src/components/PokemonList';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor='transparent'
        translucent
      />
      <View>
        <PokemonList />
      </View>
    </Provider>
  );
};

export default App;
