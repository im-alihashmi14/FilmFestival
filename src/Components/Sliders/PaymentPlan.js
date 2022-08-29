import {Box, BoxShadow, Canvas, rect, rrect} from '@shopify/react-native-skia';
import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  Layout,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {makeUseStyles} from 'react-native-stylex';
import Asset from 'src/Asset';
import globalStyles from 'src/config/globalStyles';
import {fullWidth, heightRef, isPhone, widthRef} from 'src/config/screenSize';
import {useLayout} from 'src/Context/AppContext';
import {responsiveSize} from 'src/Helper/Responsive';
import Paralax from '../Carousel/Paralax';
import GradientView from '../GradientView';
import Image from '../Image';
import Text from '../Text';
import View from '../View';
const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);
const CustomItem = ({
  item,
  animationValue,
  active,
  length,
  index,
  progressValue,
  onPress,
}) => {
  const styles = useStyles();
  const style = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-WIDTH, 0, WIDTH];

    return {
      borderColor: interpolateColor(progressValue.value, inputRange, [
        'transparent',
        'white',
        'transparent',
      ]),
      zIndex:
        progressValue.value > index - index / 2 &&
        progressValue.value < index + index / 2
          ? 1000
          : -1000,
      transform: [
        {
          scale: interpolate(
            progressValue.value,
            inputRange,
            [0.7, 1, 0.7],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [progressValue, index, length]);
  return (
    <Animated.View style={[styles.renderContainer, style]}>
      <RenderItem item={item} />
    </Animated.View>
  );
};

const RenderItem = ({item}) => {
  const styles = useStyles();
  return (
    <GradientView
      colors={['#F60ACB', '#AA36E3', '#6260FA']}
      locations={[0, 0.5, 0.8]}
      useAngle
      angle={-155}
      style={{
        flex: 1,
        justifyContent: 'center',
        borderRadius: responsiveSize({Tablet: 45, Handset: 35}),
      }}>
      <View
        style={{padding: 10, alignItems: 'center', justifyContent: 'center'}}>
        <Image size={60} source={item.icon} />
        <Text fontSize={24} color="white">
          {item.type}
        </Text>
        {item.data.map(d => (
          <View style={styles.lineView}>
            <Image size={15} source={Asset.check} />
            <Text color="white" style={{lineHeight: 21}}>
              {'  '}
              {d}
            </Text>
          </View>
        ))}
        <View style={{paddingVertical: 10, alignItems: 'center'}}>
          <Text fontSize={32} color="white" bold>
            {item.price}
          </Text>
          <Text color="white" bold>
            per month
          </Text>
        </View>
      </View>
    </GradientView>
  );
};

const WIDTH = responsiveSize({Tablet: 210, Handset: 290}) * widthRef;
const HEIGHT = responsiveSize({Tablet: 320, Handset: 400}) * heightRef;
const PaymentPlan = ({data, onIndexChange, pagingEnabled}) => {
  const [active, setActive] = useState(0);
  const styles = useStyles();
  return (
    <>
      <Paralax
        data={data}
        onIndexChange={onIndexChange}
        height={HEIGHT}
        width={fullWidth}
        loop={false}
        pagingEnabled={pagingEnabled}
        style={styles.displaySmall}
        {...{
          customAnimation: value => {
            'worklet';
            return {
              zIndex: interpolate(value, [-1, 0, 1], [-1000, 1000, -1000]),
              transform: [
                {
                  translateX: interpolate(
                    value,
                    [-1, 0, 1],
                    [-WIDTH / 2, 0, WIDTH / 2],
                  ),
                },
              ],
            };
          },
        }}
        renderItem={({item, animationValue, index, progressValue}) => (
          <CustomItem
            {...{
              item,
              animationValue,
              index,
              progressValue,
              length: data.length,
            }}
          />
        )}
      />
      <View style={styles.displayMedium}>
        {data.map((d, i) => (
          <AnimatedTouchableOpacity
            layout={Layout.springify()}
            activeOpacity={0.8}
            onPress={() => setActive(i)}
            style={[styles.renderContainer, styles.transform(active === i)]}>
            <RenderItem item={d} />
          </AnimatedTouchableOpacity>
        ))}
      </View>
    </>
  );
};
export const useStyles = makeUseStyles(({palette, utils, breakpoints}) => ({
  displaySmall: {
    display: 'flex',
    ...breakpoints.up('sm', {display: 'none'}),
  },
  displayMedium: {
    display: 'none',
    ...breakpoints.up('sm', {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    }),
  },
  transform: s => ({
    width: s ? WIDTH * 1.1 : WIDTH,
    height: s ? HEIGHT * 1.1 : HEIGHT,
    borderColor: s ? 'white' : 'transparent',
  }),
  renderContainer: {
    alignSelf: 'center',
    width: WIDTH,
    height: HEIGHT,
    borderWidth: 2,
    overflow: 'hidden',
    borderColor: globalStyles.Theme.SecondaryColor,
    justifyContent: 'flex-end',
    borderRadius: responsiveSize({Tablet: 45, Handset: 35}),
  },
  lineView: {
    width: '80%',
    flexDirection: 'row',
    paddingVertical: 10,
    alignItems: 'flex-start',
  },
}));

export default PaymentPlan;
