import {chunk, concat, partition} from 'lodash';
import React, {useState} from 'react';
import {ScrollView, TouchableOpacity} from 'react-native';
import Animated, {Layout} from 'react-native-reanimated';
import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';
import {useLayout} from 'src/Context/AppContext';
import {responsiveSize} from 'src/Helper/Responsive';
import Image from '../Image';
import Text from '../Text';
import View from '../View';
const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);
const CustomItem = ({item, active, index, onPress}) => {
  const styles = useStyles();
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
  const styles = useStyles();
  const [listData, setListData] = useState(
    data.map((d, i) => ({...d, index: i})),
  );
  return (
    <View style={[styles.wrapContainer]}>
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
const WIDTH = responsiveSize({Tablet: 324, Handset: 228});
const HEIGHT = responsiveSize({Tablet: 376, Handset: 318});
const GridList = ({data, ...rest}) => {
  const {fullWidth, heightRef} = useLayout();
  const styles = useStyles();
  // console.log(styles.test, 'LOL');
  return (
    <ScrollView
      style={styles.scrollView}
      // snapToInterval={'100%'}
      contentContainerStyle={{justifyContent: 'center'}}
      horizontal>
      {chunk(data, responsiveSize({Tablet: 5, Handset: 3})).map((d, i) => (
        <Section data={d} />
      ))}
    </ScrollView>
  );
};

const useStyles = makeUseStyles(({palette, utils, breakpoints, layout}) => ({
  scrollView: {width: '100%', marginVertical: 60 * layout.heightRef()},

  wrapContainer: {
    height: layout.heightRef(HEIGHT + 25),
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignItems: 'center',
    width: layout.fullWidth(),
  },
  renderItem: s => ({
    alignSelf: 'center',
    width: s
      ? layout.widthRef(WIDTH)
      : responsiveSize({Tablet: 190, Handset: 165}) * layout.widthRef(),
    height: s
      ? '100%'
      : responsiveSize({Tablet: 183, Handset: 160}) * layout.heightRef(),
    borderRadius: 5,
    overflow: 'hidden',
    borderColor: globalStyles.Theme.SecondaryColor,
    justifyContent: 'flex-end',
    marginRight: 15 * layout.widthRef(),
    // margin: 5,
  }),
}));

export default GridList;
