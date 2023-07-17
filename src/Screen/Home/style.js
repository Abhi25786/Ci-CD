import {Dimensions, StyleSheet} from 'react-native';
const {height, width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#101027',
    alignItems: 'center',
  },
  animatedImage: (animtion, translateXValue) => ({
    marginTop: height / 4,
    height: height / 4,
    width: width / 3,
    resizeMode: 'cover',

    transform: [
      {
        rotate: animtion.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '360deg'],
          useNativeDriver: false,
        }
          
        ),
    
      },
    ],
  }),
  textanimtionStyle: animtion => ({
    color: 'white',
    fontSize: 29,
    marginTop: -20,
    transform: [
      {
        translateX: animtion.interpolate({
          inputRange: [0, 1],
          outputRange: [-width, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
  }),
});
