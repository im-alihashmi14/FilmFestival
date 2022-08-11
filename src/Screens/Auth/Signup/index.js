/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Gradient from 'src/Components/Gradient';
import Header from 'src/Components/Header';
import Text from 'src/Components/Text';
import TextInput from 'src/Components/TextInput';
import View from 'src/Components/View';
import globalStyles from 'src/config/globalStyles';
import {fullWidth, heightRef, isPhone, widthRef} from 'src/config/screenSize';
import Asset from 'src/Asset/index';
import Icon from 'react-native-dynamic-vector-icons';
import GradientButton from 'src/Components/GradientButton';
import {useNavigation} from '@react-navigation/native';
import style from './style';

const Signup = () => {
  const nav = useNavigation();
  const [check, setCheck] = useState(false);
  return (
    <ImageBackground style={{flex: 1}} source={Asset.bgImage}>
      <Gradient
        colors={['#011826', '#011826F9', '#011826D0']}
        style={style.main}>
        {isPhone && <Header onPressIcon={() => {}} nav={nav} />}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            style.scroll,
            !isPhone && {
              width: fullWidth * 0.7,
            },
          ]}>
          <Text style={style.textTop} color={globalStyles.Theme.white}>
            START YOUR MEMBERSHIP
          </Text>
          <Text
            style={[style.header, {marginTop: heightRef * 10}]}
            color={globalStyles.Theme.white}>
            Create New Account{' '}
            <Text style={style.header} color={globalStyles.Theme.cyan}>
              .
            </Text>
          </Text>
          <View style={{flexDirection: 'row', marginBottom: heightRef * 20}}>
            <Text style={style.textInfo} color={globalStyles.Theme.white}>
              Already have an Account?
            </Text>
            <Text
              style={[
                style.textInfo,
                {
                  marginLeft: widthRef * 10,
                },
              ]}
              color={globalStyles.Theme.cyan}
              onPress={() => nav.navigate('Login')}>
              Sign in
            </Text>
          </View>
          <View style={style.inputField}>
            <TextInput icon={Asset.profileIcon} placeholder="Full Name" />
            <TextInput icon={Asset.emailIcon} placeholder="Email" />
          </View>
          <View style={style.inputField}>
            <TextInput
              icon={Asset.passwordIcon}
              placeholder="Password"
              isPassword
            />
            <TextInput
              icon={Asset.passwordIcon}
              placeholder="Confirm Password"
              isPassword
            />
          </View>
          <View
            style={[
              style.row,
              {
                marginTop: heightRef * 10,
              },
            ]}>
            <TouchableOpacity
              style={style.check}
              onPress={() => setCheck(prev => !prev)}>
              {check && (
                <Icon
                  name="check"
                  type="Encrypto"
                  color={globalStyles.Theme.white}
                  size={heightRef * 15}
                />
              )}
            </TouchableOpacity>
            <Text
              style={[
                style.textInfo,
                {
                  marginLeft: widthRef * 10,
                  marginTop: 0,
                },
              ]}
              color={globalStyles.Theme.white}
              onPress={() => {}}>
              I agree with
              <Text style={style.textInfo} color={globalStyles.Theme.cyan}>
                {' '}
                Privacy Policy & User Agreement
              </Text>
            </Text>
          </View>
          <GradientButton text={'Sign Up'} />
          <View
            style={[
              style.row,
              {
                justifyContent: 'center',
              },
            ]}>
            <Text style={style.textInfo} color={globalStyles.Theme.white}>
              or Use
            </Text>
          </View>
          <View
            style={[
              style.row,
              {
                justifyContent: 'center',
              },
            ]}>
            <SocialButton
              text={'Google'}
              icon={require('src/Asset/Images/google.png')}
            />
            <View style={{width: '3%'}} />
            <SocialButton
              text={'Facebook'}
              icon={require('src/Asset/Images/facebook.png')}
            />
          </View>
          {/* <View
            style={[
              style.row,
              {
                justifyContent: 'center',
              },
            ]}>
            <Text
              style={[
                style.textInfo,
                {
                  marginLeft: widthRef * 10,
                },
              ]}
              color={globalStyles.Theme.white}
              onPress={() => {}}>
              Already have an account?
              <Text style={style.textInfo} color={globalStyles.Theme.cyan}>
                {' '}
                Log in
              </Text>
            </Text>
          </View> */}
        </ScrollView>
      </Gradient>
    </ImageBackground>
  );
};

export default Signup;

export const SocialButton = ({icon, text}) => {
  return (
    <TouchableOpacity style={style.button}>
      <Image style={style.social} source={icon} />
      <Text style={style.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};
