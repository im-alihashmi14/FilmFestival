import React from 'react';
import {ImageBackground, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import Footer from 'src/Components/Footer';
import Gradient from 'src/Components/Gradient';
import GradientButton from 'src/Components/GradientButton';
import Header from 'src/Components/Header';
import Image from 'src/Components/Image';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef} from 'src/config/screenSize';
import {responsiveSize} from 'src/Helper/Responsive';
import {useStyles} from './style';

const ContactUs = () => {
  const style = useStyles();
  return (
    <ScrollView style={style.main}>
      <Header logo2 />
      <View style={style.container}>
        <View style={style.leftContainer}>
          <Text
            fontSize={responsiveSize({Tablet: 20, Handset: 15}) * fontRef}
            style={style.textTop}>
            Get in touch
          </Text>
          <InputField placeholder="Name" />
          <InputField placeholder="Email" />
          <InputField placeholder="Phone No." />
          <InputField placeholder="Message" multiline />
          <View style={{marginTop: heightRef * 10}}>
            <GradientButton
              height={responsiveSize({Tablet: 40, Handset: 33})}
              width={responsiveSize({Tablet: 135, Handset: 86})}
              text={'Contact'}
            />
          </View>
        </View>
        <ImageBackground
          source={require('src/Asset/Images/gradient.png')}
          style={style.rightContainer}>
          <Text style={style.contactInfo}>Contact Info</Text>
          <View style={style.phoneEmail}>
            <View style={style.row}>
              <View style={style.icon}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  resizeMode={'contain'}
                  source={require('src/Asset/Images/phone.png')}
                />
              </View>
              <Text style={style.textItem}>+44647478855</Text>
            </View>
            <View style={style.row}>
              <View style={style.icon}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  resizeMode={'contain'}
                  source={require('src/Asset/Images/envelop.png')}
                />
              </View>
              <Text style={style.textItem}>John@gmail.com</Text>
            </View>
          </View>
          <View>
            <Text style={style.socialLinkTitle}>Social Account</Text>
            <View style={style.socialLinks}>
              <Icon
                style={style.icon2}
                name="facebook-f"
                type="FontAwesome"
                size={responsiveSize({Tablet: 25, Handset: 17}) * fontRef}
                color={globalStyles.Theme.backgroundColor}
              />
              <Icon
                style={style.icon2}
                name="instagram"
                type="AntDesign"
                size={responsiveSize({Tablet: 25, Handset: 17}) * fontRef}
                color={globalStyles.Theme.backgroundColor}
              />
              <Icon
                style={style.icon2}
                name="linkedin-square"
                type="AntDesign"
                size={responsiveSize({Tablet: 25, Handset: 17}) * fontRef}
                color={globalStyles.Theme.backgroundColor}
              />
              <Icon
                style={style.icon2}
                name="twitter"
                type="AntDesign"
                size={responsiveSize({Tablet: 25, Handset: 17}) * fontRef}
                color={globalStyles.Theme.backgroundColor}
              />
              <Icon
                style={style.icon2}
                name="youtube"
                type="AntDesign"
                size={responsiveSize({Tablet: 25, Handset: 17}) * fontRef}
                color={globalStyles.Theme.backgroundColor}
              />
            </View>
          </View>
        </ImageBackground>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default ContactUs;

export const InputField = ({placeholder, multiline = false, width}) => {
  const style = useStyles();
  return (
    <View style={[style.textInputContainer, {width: width ?? '90%'}]}>
      <TextInput
        multiline={multiline}
        numberOfLines={5}
        placeholderTextColor={globalStyles.Theme.white}
        placeholder={placeholder}
        style={[
          style.textInput,
          multiline && {
            height: heightRef * 70,
          },
        ]}
      />
    </View>
  );
};
