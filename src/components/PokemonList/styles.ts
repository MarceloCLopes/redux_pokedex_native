import { Colors } from '../../theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.fire,
  },
  pokeboll: {
    top: 50,
    right: 20,
    position: 'absolute',
  },
  viewContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pokemonName: {
    fontSize: 35,
    marginLeft: 20,
    textAlign: 'left',
    fontWeight: 'bold',
    color: Colors.white,
  },
  pokemonId: {
    fontSize: 25,
    marginRight: 20,
    textAlign: 'right',
    fontWeight: 'bold',
    color: Colors.white,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: Colors.white + '70',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  buttonText: {
    fontSize: 20,
    color: Colors.black,
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pokemonTypeContainer: {
    height: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeText: {
    color: Colors.white,
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  whiteSheet: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    borderRadius: 20,
    backgroundColor: Colors.white,
    width: '95%',
    height: '52%',
  },
  aboutText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  viewInfo: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textInfo: {
    color: Colors.mediumGray,
    fontSize: 12,
    marginTop: 10,
  },
  textAbility: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
  },
  viewLine: {
    height: 100,
    width: 2,
    backgroundColor: Colors.lightGray,
    marginRight: 10,
  },
});
