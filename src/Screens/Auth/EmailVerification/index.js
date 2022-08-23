import React, {useState} from 'react';
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
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import globalStyles from 'src/config/globalStyles';
import {isPhone} from 'src/config/screenSize';
import style from './style';

const EmailVerification = () => {
  const [otp, setOtp] = useState('');
  return (
    <KeyboardAvoidingView style={{flex: 1}}>
      <ImageBackground style={{flex: 1}} source={Asset.bgImage}>
        <Gradient
          colors={['#011826', '#011826F9', '#011826D0']}
          style={style.main}>
          <View style={style.absolute}>
            <Header onPressIcon={() => {}} onlyLogo={!isPhone} />
          </View>
          <View style={style.centerItems}>
            <Text style={style.top}>We sent you a code</Text>
            <Text style={style.top2}>
              Please, enter it below to verify your email
            </Text>
            <Text style={style.email}>johndoe@gmail.com</Text>
            <OTPInput setOtp={setOtp} otp={otp} />
            <Text
              style={[style.bottom, {color: globalStyles.Theme.white}]}
              onPress={() => {}}>
              Don’t received code yet?{' '}
              <Text style={style.bottom}>Send Again</Text>
            </Text>
          </View>
        </Gradient>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default EmailVerification;

const OTPInput = ({setOtp, otp}) => {
  return (
    <View style={style.otpContainer}>
      <View style={style.otp}>
        {Array(6)
          .fill('')
          .map((i, j) => {
            return (
              <View
                style={[
                  style.otpItem,
                  {
                    borderBottomColor: otp.split('')[j]
                      ? globalStyles.Theme.SecondaryColor
                      : otp.length === j
                      ? globalStyles.Theme.white
                      : globalStyles.Theme.grayText,
                  },
                ]}>
                <Text style={style.otpText}>{otp.split('')[j]}</Text>
              </View>
            );
          })}
      </View>
      <TextInput
        maxLength={6}
        onChangeText={setOtp}
        value={otp}
        keyboardType={'numeric'}
        caretHidden
        style={style.input}
      />
    </View>
  );
};
