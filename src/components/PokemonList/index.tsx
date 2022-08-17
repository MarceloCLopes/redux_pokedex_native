import { styles } from './styles';
import { Colors } from '../../theme';
import React, { useEffect } from 'react';
import { PokemonClient } from 'pokenode-ts';
import { Pokemon, Stats } from '../../models/Pokemon';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setPokemon } from '../../features/pokemon/pokemonSlice';
import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from '../../features/counter/counterSlice';
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export function PokemonList() {
  const dispatch = useAppDispatch();
  const currentPokemon = useAppSelector(state => state.pokemon);
  const counter = useAppSelector(state => state.counter.value);

  useEffect(() => {
    const fetchPokemon = async () => {
      const api = new PokemonClient();
      await api
        .getPokemonById(counter)
        .then(pokemon => {
          const currentPokemonStats: Stats = {
            hp: pokemon.stats[0].base_stat,
            attack: pokemon.stats[1].base_stat,
            defense: pokemon.stats[2].base_stat,
            specialAttack: pokemon.stats[3].base_stat,
            specialDefense: pokemon.stats[4].base_stat,
            speed: pokemon.stats[5].base_stat,
          };
          const newPokemon: Pokemon = {
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon?.sprites?.front_default?.toString(),
            height: pokemon.height,
            weight: pokemon.weight,
            type: pokemon?.types[0]?.type?.name?.toString(),
            move: pokemon?.moves[0]?.move?.name?.toString(),
            stats: currentPokemonStats,
            color:
              pokemon?.types[0]?.type?.name?.toString() === 'grass'
                ? Colors.grass
                : pokemon?.types[0]?.type?.name?.toString() === 'fire'
                  ? Colors.fire
                  : pokemon?.types[0]?.type?.name?.toString() === 'water'
                    ? Colors.water
                    : pokemon?.types[0]?.type?.name?.toString() === 'electric'
                      ? Colors.electric
                      : pokemon?.types[0]?.type?.name?.toString() === 'ice'
                        ? Colors.ice
                        : pokemon?.types[0]?.type?.name?.toString() === 'fighting'
                          ? Colors.fighting
                          : pokemon?.types[0]?.type?.name?.toString() === 'poison'
                            ? Colors.poison
                            : pokemon?.types[0]?.type?.name?.toString() === 'ground'
                              ? Colors.ground
                              : pokemon?.types[0]?.type?.name?.toString() === 'flying'
                                ? Colors.flying
                                : pokemon?.types[0]?.type?.name?.toString() === 'psychic'
                                  ? Colors.psychic
                                  : pokemon?.types[0]?.type?.name?.toString() === 'bug'
                                    ? Colors.bug
                                    : pokemon?.types[0]?.type?.name?.toString() === 'rock'
                                      ? Colors.rock
                                      : pokemon?.types[0]?.type?.name?.toString() === 'ghost'
                                        ? Colors.ghost
                                        : pokemon?.types[0]?.type?.name?.toString() === 'dragon'
                                          ? Colors.dragon
                                          : pokemon?.types[0]?.type?.name?.toString() === 'dark'
                                            ? Colors.dark
                                            : pokemon?.types[0]?.type?.name?.toString() === 'steel'
                                              ? Colors.steel
                                              : pokemon?.types[0]?.type?.name?.toString() === 'fairy'
                                                ? Colors.fairy
                                                : pokemon?.types[0]?.type?.name?.toString() === 'normal'
                                                  ? Colors.normal
                                                  : Colors.black,
          };

          dispatch(setPokemon(newPokemon));
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchPokemon();
  }, [counter, dispatch]);

  function handleNextButton() {
    dispatch(increment());
  }

  function handlePrevButton() {
    dispatch(decrement());
  }

  function handleIncrementByAmount(value: number) {
    dispatch(incrementByAmount(value));
  }

  function handleDecrementByAmount(value: number) {
    dispatch(decrementByAmount(value));
  }

  const StatLine = (props: {
    number: number | undefined;
    color: string | undefined;
  }) => {
    return (
      <View
        style={{
          width: props.number,
          marginVertical: 6,
          height: 5,
          marginLeft: 10,
          borderRadius: 5,
          backgroundColor: props.color,
        }}
      />
    );
  };

  return (
    <View style={[styles.container, { backgroundColor: currentPokemon.color }]}>
      <Image
        style={styles.pokeboll}
        source={require('../../images/Pokeball.png')}
      />
      <View style={styles.whiteSheet} />
      <SafeAreaView>
        {/*Name and Number*/}
        <View style={[styles.row, { marginTop: 25 }]}>
          <Text style={styles.pokemonName} >
            {currentPokemon.name.charAt(0).toUpperCase() + currentPokemon.name.slice(1)}
          </Text>
          <Text style={styles.pokemonId} >
            #{currentPokemon.id}
          </Text>
        </View>

        {/*Image and Buttons*/}
        <View style={[styles.row, { height: 200 }]}>
          <View >
            <TouchableOpacity
              style={styles.button}
              onPress={handlePrevButton}
            >
              <Text style={styles.buttonText} >◀️</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleDecrementByAmount(100)}
            >
              <Text style={styles.buttonText}>⏮️</Text>
            </TouchableOpacity>
          </View>

          <Image
            style={styles.pokemonImage}
            source={{ uri: currentPokemon.image }}
          />

          <View>
            <TouchableOpacity
              style={styles.button}
              onPress={handleNextButton}
            >
              <Text style={styles.buttonText} >▶️</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => handleIncrementByAmount(100)}
            >
              <Text style={styles.buttonText}>⏭️</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/*Pokemon Type*/}
        <View
          style={[
            styles.pokemonTypeContainer,
            { alignSelf: 'center', backgroundColor: currentPokemon.color }
          ]}
        >
          <Text style={styles.typeText} >{currentPokemon.type}</Text>
        </View>

        {/*Pokemon About*/}
        <View>
          <Text style={[styles.aboutText, { color: currentPokemon.color }]} >About</Text>

          <View style={[styles.row, { justifyContent: 'center', marginTop: 20 }]}>
            <View style={styles.viewInfo}>
              <Text>
                ⚖️{' '}
                {currentPokemon.weight
                  ?.toString()
                  .slice(0, currentPokemon.weight.toString().length - 1)}
                .
                {currentPokemon.weight
                  ?.toString()
                  .slice(
                    currentPokemon.weight.toString().length - 1,
                    currentPokemon.weight.toString().length,
                  )}{' '}
                kg
              </Text>
              <Text
                style={styles.textInfo}>
                Weight
              </Text>
            </View>
            <View style={styles.viewInfo}>
              <Text>
                📏{' '}
                {currentPokemon.height
                  ?.toString()
                  .slice(0, currentPokemon.height.toString().length - 1)}
                .
                {currentPokemon.height
                  ?.toString()
                  .slice(
                    currentPokemon.height.toString().length - 1,
                    currentPokemon.height.toString().length,
                  )}{' '}
                m
              </Text>
              <Text
                style={styles.textInfo}>
                Height
              </Text>
            </View>
            <View style={styles.viewInfo}>
              <Text>{currentPokemon.move}</Text>
              <Text
                style={styles.textInfo}>
                Move
              </Text>
            </View>
          </View>
        </View>

        {/*Pokemon Abilities*/}
        <View>
          <Text
            style={[styles.textAbility, { color: currentPokemon.color }]}
          >
            Base Stats
          </Text>
          <View
            style={[
              styles.row,
              {
                justifyContent: 'flex-start',
                marginHorizontal: 30,
                marginTop: 20
              }
            ]}
          >
            <View style={{ alignItems: 'flex-end', marginRight: 10 }}>
              <Text>HP</Text>
              <Text>Attack</Text>
              <Text>Defense</Text>
              <Text>Special Attack</Text>
              <Text>Special Defense</Text>
              <Text>Speed</Text>
            </View>
            <View style={styles.viewLine} />
            <View >
              <Text>{currentPokemon.stats?.hp}</Text>
              <Text>{currentPokemon.stats?.attack}</Text>
              <Text>{currentPokemon.stats?.defense}</Text>
              <Text>{currentPokemon.stats?.specialAttack}</Text>
              <Text>{currentPokemon.stats?.specialDefense}</Text>
              <Text>{currentPokemon.stats?.speed}</Text>
            </View>
            <View>
              <StatLine
                number={currentPokemon.stats?.hp}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.attack}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.defense}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.specialAttack}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.specialDefense}
                color={currentPokemon.color}
              />
              <StatLine
                number={currentPokemon.stats?.speed}
                color={currentPokemon.color}
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
