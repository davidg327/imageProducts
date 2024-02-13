import {StyleSheet} from 'react-native';

const cartProductStyles = StyleSheet.create({
  card: {
    width: '45%',
    borderWidth: 0.5,
    borderColor: '#f84e4e',
    marginBottom: '2%',
    borderRadius: 10,
  },
  cardImage: {
    width: '100%',
    height: 140,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  textName: {
    marginTop: 5,
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    fontWeight: '600',
  },
  textPrice: {
    marginTop: 5,
    textAlign: 'center',
    color: 'green',
    fontSize: 12,
    fontWeight: '500',
  },
  containerButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginTop: '5%',
  },
  containerButton: {
    backgroundColor: '#3b59ff',
    borderRadius: 16,
    width: '48%',
    paddingVertical: 5,
    marginBottom: 10,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
    fontSize: 8,
    fontWeight: '600',
  },
});

export default cartProductStyles;
