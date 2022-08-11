import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Asset from 'src/Asset';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import Paralax from '../Carousel/Paralax';
import Image from '../Image';
const CustomItem = ({item, animationValue, length, index, progressValue}) => {
  const style = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-WIDTH, 0, WIDTH];

    if (index === 0 && progressValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-WIDTH * 1.5, 0, WIDTH * 1.5];
    }
    return {
      alignSelf: 'center',
      width: fullWidth,
      height: HEIGHT,
      zIndex:
        progressValue.value > index - index / 2 &&
        progressValue.value < index + index / 2
          ? 1000
          : -1000,
      transform: [
        {
          translateX: interpolate(progressValue.value, inputRange, outputRange),
        },
        {
          scale: interpolate(
            progressValue.value,
            inputRange,
            [0.8, 1, 0.8],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [progressValue, index, length]);
  return (
    <Animated.View style={style}>
      <Image source={item} />
    </Animated.View>
  );
};

const WIDTH = 211 * widthRef;
const HEIGHT = 450 * heightRef;
const ParalaxType1 = ({data, onIndexChange}) => {
  return (
    <Paralax
      data={data}
      onIndexChange={onIndexChange}
      height={HEIGHT}
      renderItem={({item, animationValue, index, progressValue}) => (
        <CustomItem
          {...{
            item,
            animationValue,
            index,
            progressValue,
            length: Asset.movies.length,
          }}
        />
      )}
    />
  );
};

export default ParalaxType1;
