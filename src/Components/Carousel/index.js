import React, {useState} from 'react';
import {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {
  Extrapolate,
  interpolate,
  useSharedValue,
} from 'react-native-reanimated';
import AnimatedCarousel, {
  TCarouselProps,
} from 'react-native-reanimated-carousel';
import {fullWidth} from 'src/config/screenSize';
const Carousel = ({
  data,
  renderItem,
  onIndexChange = () => {},
  ...rest
}: TCarouselProps) => {
  const progressValue = useSharedValue(0);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    onIndexChange(index);
  }, [index]);
  return (
    <AnimatedCarousel
      style={{flexGrow: 0, marginVertical: 30}}
      data={data}
      width={fullWidth}
      height={400}
      loop={false}
      customAnimation={anim => {
        'worklet';
        let inputRange = [index - 1, index, index + 1];

        return {
          zIndex: interpolate(
            anim,
            inputRange,
            [1000, -1000, 1000],
            Extrapolate.CLAMP,
          ),
          //   zIndex:
          //     anim.value > index - index / 2 && anim.value < index + index / 2
          //       ? 1000
          //       : -1000,
        };
      }}
      onProgressChange={(_, absoluteProgress) => {
        setIndex(Math.floor(absoluteProgress));
        progressValue.value = absoluteProgress;
      }}
      renderItem={({item, animationValue, index: i}) =>
        renderItem({item, animationValue, index: i, progressValue})
      }
      {...rest}
    />
  );
};

export default Carousel;

const styles = StyleSheet.create({});
