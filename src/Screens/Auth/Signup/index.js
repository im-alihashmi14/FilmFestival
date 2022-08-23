/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import Asset from 'src/Asset/index';
import Gradient from 'src/Components/Gradient';
import GradientButton from 'src/Components/GradientButton';
import Header from 'src/Components/Header';
import Text from 'src/Components/Text';
import TextInput from 'src/Components/TextInput';
import View from 'src/Components/View';
import globalStyles from 'src/config/globalStyles';
import {useLayout} from 'src/Context/AppContext';
import {useStyles} from './style';

const Signup = () => {
  const {fullWidth, heightRef, isPhone, widthRef} = useLayout();
  const nav = useNavigation();
  const style = useStyles();
  const [check, setCheck] = useState(false);
  return (
    <ImageBackground style={{flex: 1}} source={Asset.bgImage}>
      <Gradient
        colors={['#011826', '#011826F9', '#011826D0']}
        style={style.main}>
        {isPhone && <Header onPressIcon={() => {}} nav={nav} />}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[style.scroll]}>
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
          <GradientButton
            text={'Sign Up'}
            onPress={() => nav.navigate('EmailVerification')}
          />
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
        </ScrollView>
      </Gradient>
    </ImageBackground>
  );
};

export default Signup;

export const SocialButton = ({icon, text}) => {
  const style = useStyles();
  return (
    <TouchableOpacity style={style.button}>
      <Image style={style.social} source={icon} />
      <Text style={style.textBtn}>{text}</Text>
    </TouchableOpacity>
  );
};
