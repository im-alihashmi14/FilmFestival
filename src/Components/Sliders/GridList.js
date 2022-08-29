import React, {useState} from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {Layout} from 'react-native-reanimated';
import Asset from 'src/Asset';
import globalStyles from 'src/config/globalStyles';
import {fullWidth, heightRef, widthRef} from 'src/config/screenSize';
import {responsiveSize} from 'src/Helper/Responsive';
import FlatList from '../FlatList';
import Image from '../Image';
import Text from '../Text';
import View from '../View';
import {chunk, partition, concat} from 'lodash';
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const CustomItem = ({item, active, index, onPress}) => {
  return (
    <AnimatedTouchable
      onPress={onPress}
      layout={Layout.springify()}
      style={styles.renderItem(index === 0)}>
      <Image
        source={item.image}
        resizeMode="cover"
        style={{position: 'absolute'}}
        dim={0}
      />
      <View style={{padding: 8}}>
        <Text color="white">{item.name}</Text>
        <Text color="white" bold>
          {item.qoute}
        </Text>
      </View>
    </AnimatedTouchable>
  );
};
const Section = ({data}) => {
  const [listData, setListData] = useState(
    data.map((d, i) => ({...d, index: i})),
  );
  return (
    <View style={styles.wrapContainer}>
      {listData.map((item, index) => (
        <CustomItem
          key={item.name}
          onPress={() => {
            setListData(l =>
              concat(...partition(l, o => o.name === item.name)),
            );
          }}
          item={item}
          index={index}
          length={item.length}
        />
      ))}
    </View>
  );
};
const WIDTH = responsiveSize({Tablet: 324, Handset: 228}) * widthRef;
const HEIGHT = responsiveSize({Tablet: 376, Handset: 318}) * heightRef;
const GridList = ({data, ...rest}) => {
  return (
    <ScrollView
      style={{width: '100%', marginVertical: 60 * heightRef}}
      snapToInterval={fullWidth}
      contentContainerStyle={{justifyContent: 'center'}}
      horizontal>
      {chunk(data, responsiveSize({Tablet: 5, Handset: 3})).map((d, i) => (
        <Section data={d} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapContainer: {
    height: HEIGHT + 25,
    width: fullWidth,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  renderItem: s => ({
    alignSelf: 'center',
    width: s ? WIDTH : responsiveSize({Tablet: 190, Handset: 165}) * widthRef,
    height: s
      ? '100%'
      : responsiveSize({Tablet: 183, Handset: 160}) * heightRef,
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: globalStyles.Theme.SecondaryColor,
    justifyContent: 'flex-end',
    marginRight: 15 * widthRef,
    // margin: 5,
  }),
});

export default GridList;
