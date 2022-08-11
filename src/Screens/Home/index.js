/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView, Text as RNText} from 'react-native';
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
import ParalaxType1 from 'src/Components/RenderItems/ParalaxType1';
import ParalaxType2 from 'src/Components/RenderItems/ParalaxType2';
import PlaneFlatlist from 'src/Components/RenderItems/PlaneFlatlist';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import globalStyles from 'src/config/globalStyles';
import {
  fullHeight,
  fullWidth,
  heightRef,
  widthRef,
} from 'src/config/screenSize';
import {director} from 'src/JSON/home';
import styles from './style';

const WIDTH = 211 * widthRef;
const HEIGHT = 450 * heightRef;

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
          <ParalaxType1 onIndexChange={setIndex} data={Asset.movies} />

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

        <View
          style={{
            height: 400 * heightRef,
            width: '100%',
            padding: 30,
            paddingVertical: 60,
          }}>
          <Image
            width={288}
            height={213}
            source={Asset.movie4}
            style={{
              position: 'absolute',
              top: 52 * heightRef,
              left: 30 * widthRef,
              borderRadius: 8,
            }}
            dim={5}
          />
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <Text fontSize={42} color="white">
              Why Join
            </Text>
            <Text
              fontSize={42}
              color={globalStyles.Theme.SecondaryColor}
              paddingVertical={10}>
              FilmFestival?
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
            }}>
            <Text
              fontSize={17}
              color="white"
              style={{width: 290 * widthRef, lineHeight: 27 * heightRef}}>
              We’ve created a unique streaming and social experience for movie
              lovers and movie makers. It’s a place to watch movies, discover
              filmmakers, and unheralded films, while discussing your favorite
              actresses/actors and upcoming movies. SonderBlu is the only place
              to Connect, Share, Stream, and Socialize around movies.
            </Text>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            fontSize={42}
            color={globalStyles.Theme.SecondaryColor}
            paddingVertical={10}>
            Filmmaker Highlights
          </Text>
          <ParalaxType2 data={director} />
        </View>
        <View style={{alignItems: 'center'}}>
          <Text
            fontSize={42}
            color={globalStyles.Theme.SecondaryColor}
            paddingVertical={10}>
            Sign Up Now
          </Text>
          <Text fontSize={42} color={'white'} paddingVertical={10}>
            to Watch Free Movies
          </Text>
          <PlaneFlatlist data={[...director, ...director]} />
        </View>
      </Gradient>
    </ScrollView>
  );
};

export default Home;
