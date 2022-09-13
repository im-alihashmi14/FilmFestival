/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
} from 'react-native';
import Asset from 'src/Asset';
import Gradient from 'src/Components/Gradient';
import Header from 'src/Components/Header';
import Image from 'src/Components/Image';
import BiographyList from 'src/Components/Sliders/BiographyList';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import globalStyles from 'src/config/globalStyles';
import {
  fullHeight,
  fullWidth,
  heightRef,
  isPhone,
  widthRef,
} from 'src/config/screenSize';
import {Movies} from 'src/JSON/home';
import style from './style';

const Biography = () => {
  const nav = useNavigation();
  const [otp, setOtp] = useState('');
  useEffect(() => {
    otp.length === 6 && nav.navigate('Payment');
  }, [nav, otp]);
  return (
    <ScrollView>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ImageBackground style={{flex: 1}} source={Asset.bgImage}>
          <Gradient
            colors={['#011826', '#011826F9', '#011826D0']}
            style={style.main}>
            <Header onPressIcon={() => {}} onlyLogo={!isPhone} />
            <View style={style.centerItems}>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    height: '100%',
                    width: 1,
                    position: 'absolute',
                    backgroundColor: '#9E9E9F',
                  }}
                />
                {Movies.map(v => (
                  <View
                    style={{
                      height: 50 * heightRef,
                      width: 50 * heightRef,
                      backgroundColor: 'red',
                      marginTop: 40 * heightRef,
                      borderRadius: 15,
                      overflow: 'hidden',
                      borderWidth: 1,
                      borderColor: 'white',
                    }}>
                    <Image source={v.image} resizeMode="cover" />
                  </View>
                ))}
              </View>
              <View style={{flex: 1, paddingLeft: 30, height: '100%'}}>
                <Text fontSize={48} style={style.top}>
                  Biography
                </Text>
                <Text fontSize={18} style={style.top2}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquet proin sit in nunc, leo tortor. Metus fringilla elit
                  donec sed malesuada pulvinar eget faucibus. Lectus est ut
                  potenti consectetur lectus sollicitudin leo, augue massa.
                  Aliquam penatibus amet donec lectus sit commodo lorem. At
                  mollis commodo feugiat turpis eu.
                </Text>
              </View>
            </View>
            <View
              style={{height: fullHeight / 3, width: '100%', marginBottom: 30}}>
              <BiographyList
                data={Movies}
                contentContainerStyle={{paddingLeft: fullWidth / 2}}
              />
            </View>
          </Gradient>
        </ImageBackground>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default Biography;
