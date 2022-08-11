import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Asset from 'src/Asset';
import globalStyles from 'src/config/globalStyles';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import Paralax from '../Carousel/Paralax';
import Image from '../Image';
import Text from '../Text';
import View from '../View';
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
      width: WIDTH,
      height: HEIGHT,
      borderRadius: 5,
      overflow: 'hidden',
      borderWidth: 1,
      borderColor: globalStyles.Theme.SecondaryColor,
      justifyContent: 'flex-end',
    };
  }, [progressValue, index, length]);
  return (
    <Animated.View style={style}>
      <Image
        source={item.image}
        resizeMode="cover"
        style={{position: 'absolute'}}
        dim={5}
      />
      <View style={{padding: 8}}>
        <Text color="white">{item.name}</Text>
        <Text color="white" bold>
          {item.qoute}
        </Text>
      </View>
    </Animated.View>
  );
};

const WIDTH = 280 * widthRef;
const HEIGHT = 200 * heightRef;
const PlaneFlatlist = ({data, onIndexChange}) => {
  return (
    <Paralax
      data={data}
      onIndexChange={onIndexChange}
      height={HEIGHT}
      mode="horizontal-stack"
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

export default PlaneFlatlist;
