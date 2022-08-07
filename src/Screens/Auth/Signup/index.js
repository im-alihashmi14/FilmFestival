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
import {heightRef, widthRef} from 'src/config/screenSize';
import Asset from 'src/Asset/index';
import Icon from 'react-native-dynamic-vector-icons';
import GradientButton from 'src/Components/GradientButton';
import {useNavigation} from '@react-navigation/native';
import style from './style';

const Signup = () => {
  const nav = useNavigation();
  const [check, setCheck] = useState(false);
  return (
    <ImageBackground
      style={{flex: 1}}
      source={require('src/Asset/Images/bgImage.png')}>
      <Gradient
        colors={['#011826', '#011826F9', '#011826D0']}
        style={style.main}>
        <Header onPressIcon={() => {}} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.scroll}>
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
          <TextInput icon={Asset.profileIcon} placeholder="Full Name" />
          <TextInput icon={Asset.profileIcon} placeholder="Username" />
          <TextInput icon={Asset.emailIcon} placeholder="Email" />
          <TextInput
            icon={Asset.passwordIcon}
            placeholder="Password"
            isPassword
          />
          <View style={style.row}>
            <TouchableOpacity
              style={style.check}
              onPress={() => setCheck(prev => !prev)}>
              {check && (
                <Icon
                  name="check"
                  type="Encrypto"
                  color={globalStyles.Theme.PrimaryColor}
                  size={heightRef * 15}
                />
              )}
            </TouchableOpacity>
            <Text
              style={[
                style.textInfo,
                {
                  marginLeft: widthRef * 10,
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
              or Sign Up with
            </Text>
          </View>
          <View
            style={[
              style.row,
              {
                justifyContent: 'space-between',
              },
            ]}>
            <SocialButton icon={require('src/Asset/Images/facebook.png')} />
            <SocialButton icon={require('src/Asset/Images/google.png')} />
          </View>
          <View
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
          </View>
        </ScrollView>
      </Gradient>
    </ImageBackground>
  );
};

export default Signup;

export const SocialButton = ({icon}) => {
  return (
    <TouchableOpacity>
      <Gradient colors={['#273055', '#294A5B']} style={style.button}>
        <Image style={style.social} source={icon} />
      </Gradient>
    </TouchableOpacity>
  );
};
