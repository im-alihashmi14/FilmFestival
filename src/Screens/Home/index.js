/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import Asset from 'src/Asset';
import BlurBackground from 'src/Components/BlurBackground';
import Paralax from 'src/Components/Carousel/Paralax';
import Gradient from 'src/Components/Gradient';
import GradientButton from 'src/Components/GradientButton';
import Header from 'src/Components/Header';
import Image from 'src/Components/Image';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import globalStyles from 'src/config/globalStyles';
import {
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from 'src/config/screenSize';
import styles from './style';

const WIDTH = 211 * widthRef;
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
      height: 450 * heightRef,
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
  console.log(progressValue.value, index);
  return (
    <Animated.View style={style}>
      <Image source={item} />
    </Animated.View>
  );
};

const Home = () => {
  const nav = useNavigation();
  const [id, setIndex] = useState(0);

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: heightRef * 80}}
      style={styles.container}
      showsVerticalScrollIndicator={false}>
      <Gradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0}}
        colors={globalStyles.Theme.gradientGray}>
        <BlurBackground
          source={Asset.movies[id]}
          style={{
            alignSelf: 'center',
            paddingBottom: heightRef * 45,
            alignItems: 'center',
            width: '100%',
          }}>
          <Header />
          <Paralax
            onIndexChange={setIndex}
            data={Asset.movies}
            height={400}
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

          <View style={{width: '90%'}}>
            <Text fontSize={22} color="white">
              The World First Intractive
            </Text>
            <Text
              fontSize={35}
              color={globalStyles.Theme.SecondaryColor}
              paddingVertical={10}>
              Streaming Platform
            </Text>
            <Text fontSize={22} color={'white'} paddingVertical={10}>
              Connect, share, stream and sochialize only on
            </Text>
            <GradientButton
              text={'GET STARTED'}
              width={widthRef * 150}
              onPress={() =>
                nav.navigate('AuthStack', {
                  screen: 'SignUp',
                })
              }
            />
          </View>
        </BlurBackground>
      </Gradient>
    </ScrollView>
  );
};

export default Home;
