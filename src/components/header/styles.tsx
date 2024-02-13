import {StyleSheet} from 'react-native';

const headerStyles = StyleSheet.create({
  containerHeader: {
    backgroundColor: '#cbcbcb',
    height: 50,
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
});

export default headerStyles;
