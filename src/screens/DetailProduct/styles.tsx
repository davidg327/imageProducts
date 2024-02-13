import {StyleSheet} from 'react-native';

const detailProductStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHeader: {
    backgroundColor: '#cbcbcb',
    height: '7%',
  },
  containerIconLeft: {
    padding: '2%',
    position: 'absolute',
    marginTop: '2%',
    left: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  titleHeader: {
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '800',
  },
  imageDetail: {
    marginTop: '10%',
    width: '90%',
    height: 300,
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
