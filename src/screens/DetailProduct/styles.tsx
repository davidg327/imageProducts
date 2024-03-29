import {StyleSheet} from 'react-native';

const detailProductStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageDetailVertical: {
    marginTop: '5%',
    width: 250,
    height: 300,
    alignSelf: 'center',
    borderRadius: 16,
  },
  imageDetailHorizontal: {
    marginTop: '5%',
    width: '90%',
    height: 200,
    alignSelf: 'center',
    borderRadius: 16,
  },
  containerInfoText: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    alignSelf: 'center',
    marginTop: '5%',
    justifyContent: 'space-between',
  },
  textInfo: {
    width: '30%',
    color: 'black',
    fontSize: 14,
    fontWeight: '800',
  },
  textDescription: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '800',
    width: '70%',
    color: 'black',
  },
  textPrice: {
    fontSize: 14,
    fontWeight: '800',
    color: 'green',
    width: '70%',
    textAlign: 'left',
  },
  textStock: {
    fontSize: 14,
    fontWeight: '800',
    color: 'blue',
    width: '70%',
    textAlign: 'left',
  },
  containerClose: {
    position: 'absolute',
    right: '10%',
    top: '5%',
    zIndex: 1,
  },
});

export default detailProductStyles;
