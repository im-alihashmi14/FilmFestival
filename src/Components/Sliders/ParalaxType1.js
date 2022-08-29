import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Paralax from '../Carousel/Paralax';
import Image from '../Image';
const CustomItem = ({
  item,
  animationValue,
  HEIGHT,
  width,
  length,
  index,
  progressValue,
}) => {
  const WIDTH = width;
  const style = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-WIDTH, 0, WIDTH];

    if (index === 0 && progressValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-WIDTH * 2, 0, WIDTH * 2];
    }
    return {
      alignSelf: 'center',
      width: '100%',
      height: HEIGHT,

      transform: [
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
      <Image source={item.image} resizeMode="contain" />
    </Animated.View>
  );
};

const ParalaxType1 = ({data, height, style, WIDTH, onIndexChange}) => {
  const HEIGHT = height;
  return (
    <Paralax
      data={data}
      onIndexChange={onIndexChange}
      height={HEIGHT}
      width={WIDTH}
      style={style}
      customAnimation={value => {
        'worklet';

        return {
          zIndex: interpolate(value, [-1, 0, 1], [-1000, 1000, -1000]),
          transform: [
            {
              translateX: interpolate(
                value,
                [-2, -1, 0, 1, 2],
                [-WIDTH / 1.5, -WIDTH / 2, 0, WIDTH / 2, WIDTH / 1.5],
                Extrapolate.CLAMP,
              ),
            },
          ],
        };
      }}
      renderItem={({item, animationValue, index, progressValue}) => (
        <CustomItem
          {...{
            item,
            HEIGHT,
            width: WIDTH,
            animationValue,
            index,
            progressValue,
            length: data.length,
          }}
        />
      )}
    />
  );
};

export default ParalaxType1;
