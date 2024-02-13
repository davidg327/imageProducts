import {StyleSheet} from 'react-native';

const productStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
  },
  title: {
    textAlign: 'center',
    marginTop: '5%',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  icon: {
    position: 'absolute',
    right: '10%',
    top: '2.5%',
  },
  flatList: {
    marginTop: '5%',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flex: 1,
  },
  paddingFlatList: {
    paddingBottom: '10%',
  },
});

export default productStyles;
