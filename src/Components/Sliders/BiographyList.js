import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import globalStyles from 'src/config/globalStyles';
import {heightRef, widthRef} from 'src/config/screenSize';
import FlatList from '../FlatList';
import Image from '../Image';
import Text from '../Text';
import View from '../View';
const CustomItem = ({item, translate, index, length}) => {
  const style = useAnimatedStyle(() => {
    let inputRange = Array(length)
      .fill(WIDTH)
      .map((v, i) => v * i);
    return {
      transform: [
        {
          translateY: interpolate(
            translate.value,
            inputRange,
            Array(length)
              .fill(0)
              .map((v, i) => ((index + i) % 2 ? 0 : 50 * heightRef)),
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, []);
  return (
    <Animated.View style={style}>
      <View style={styles.renderItem(index)}>
        <Image
          source={item.image}
          resizeMode="cover"
          style={{position: 'absolute'}}
          dim={item.dim ?? 5}
        />
        <View style={{padding: 8}}>
          <Text color="white" bold>
            {item.qoute}
          </Text>
        </View>
      </View>
      <Text paddingVertical={5} color="white">
        {'  '} {item.name}
      </Text>
    </Animated.View>
  );
};

const WIDTH = 126 * widthRef;
const HEIGHT = 188 * heightRef;
const BiographyList = ({data, ...rest}) => {
  const translate = useSharedValue(0);
  return (
    <FlatList
      data={data}
      style={{width: '100%'}}
      horizontal
      scrollEventThrottle={16}
      onScroll={e => {
        translate.value = e.nativeEvent.contentOffset.x;
      }}
      renderItem={({item, index}) => (
        <CustomItem
          {...{
            item,
            index,
            length: data.length,
            translate,
          }}
        />
      )}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  renderItem: index => ({
    alignSelf: 'center',
    // marginTop: index % 2 ? 0 : 50 * heightRef,
    width: WIDTH,
    height: HEIGHT,
    borderRadius: 15,
    borderWidth: 1,
    overflow: 'hidden',
    borderColor: globalStyles.Theme.SecondaryColor,
    justifyContent: 'flex-end',
    marginHorizontal: 5 * widthRef,
  }),
});

export default BiographyList;
