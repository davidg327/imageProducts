import {StyleSheet} from 'react-native';

const createProductStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerInput: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginTop: '4%',
  },
  textError: {
    marginLeft: '5%',
    marginTop: '1%',
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
  },
  containerButtonImage: {
    marginTop: '5%',
    width: '60%',
    alignSelf: 'flex-start',
    backgroundColor: '#ff8e00',
    borderRadius: 6,
    paddingVertical: 5,
    marginLeft: '5%',
  },
  containerButton: {
    marginTop: '5%',
    marginBottom: '10%',
    width: '60%',
    alignSelf: 'center',
    backgroundColor: '#2196F3',
    borderRadius: 16,
    paddingVertical: 5,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
  },
  imageProductVertical: {
    width: 100,
    height: 180,
    marginLeft: '5%',
    marginTop: '3%',
  },
  imageProductHorizontal: {
    width: 180,
    height: 100,
    marginLeft: '5%',
    marginTop: '3%',
  },
});

export default createProductStyles;
