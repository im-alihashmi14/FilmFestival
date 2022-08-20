/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import Asset from 'src/Asset';
import BlurBackground from 'src/Components/BlurBackground';
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
import {getDimensions} from 'src/config/screenSize';
import {useLayout} from 'src/Context/AppContext';
import {director} from 'src/JSON/home';
import styles, {useStyles} from './style';

const Home = () => {
  const {heightRef, widthRef, fullWidth} = useLayout();
  const nav = useNavigation();
  const [id, setIndex] = useState(0);
  const Style = useStyles();
  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: heightRef * 80}}
      style={Style.container}
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
          <View style={Style.sliderContainer}>
            <View style={Style.parallaxContainer}>
              <ParalaxType1
                height={309}
                WIDTH={211}
                onIndexChange={setIndex}
                data={Asset.movies}
                style={{width: '100%'}}
              />
            </View>

            <View style={Style.sliderTitleContainer}>
              <Text fontSize={{Handset: 22, Tablet: 44}} color="white">
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
          </View>
        </BlurBackground>

        <View
          deviceStyle={{Tablet: {flexDirection: 'row'}}}
          height={{Handset: 400, Tablet: 258}}
          style={{
            width: '100%',
            padding: 30,
            paddingVertical: 60,
          }}>
          <View
            width={{Tablet: 460, Handset: 288}}
            height={{Handset: 213, Tablet: 258}}
            style={{
              position: 'absolute',
              top: 52 * heightRef,
              left: 30 * widthRef,
              borderRadius: 8,
            }}>
            <Image source={Asset.movie4} dim={5} />
          </View>
          <View
            style={{flex: 1, justifyContent: 'flex-end'}}
            deviceStyle={{Tablet: {justifyContent: 'flex-start'}}}>
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
