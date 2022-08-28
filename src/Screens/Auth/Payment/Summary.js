/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';

import React, {useState} from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import Asset from 'src/Asset';
import Gradient from 'src/Components/Gradient';
import GradientButton from 'src/Components/GradientButton';
import Header from 'src/Components/Header';
import Image from 'src/Components/Image';
import RadioButton from 'src/Components/RadioButton';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, isPhone, widthRef} from 'src/config/screenSize';
import {responsiveSize} from 'src/Helper/Responsive';
import {InputField} from 'src/Screens/ContactUs';
import {CheckText} from './index';
import {useStyles} from './style';

const Summary = () => {
  const nav = useNavigation();
  const style = useStyles();
  const [check, setCheck] = useState(false);
  return (
    <ImageBackground style={{flex: 1}} source={Asset.bgImage}>
      <Gradient
        colors={['#011826', '#011826F9', '#011826D0']}
        style={style.main}>
        <Header onPressIcon={() => {}} nav={nav} onlyLogo={!isPhone} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.scrollSummary}>
          <View
            style={[
              style.container,
              {
                paddingVertical: heightRef * 40,
              },
              style.borderTab,
            ]}>
            <Text
              style={[
                style.textTop,
                {
                  fontSize: responsiveSize({Tablet: 30, Handset: 20}) * fontRef,
                },
              ]}>
              Enter Your Credit or Debit Card
            </Text>
            <View style={style.cardRow}>
              <Image
                source={require('src/Asset/Images/visa.png')}
                style={style.card}
              />
              <Image
                source={require('src/Asset/Images/master.png')}
                style={style.card}
              />
              <Image
                source={require('src/Asset/Images/americanExpress.png')}
                style={style.card}
              />
              <Image
                source={require('src/Asset/Images/discover.png')}
                style={style.card}
              />
            </View>
            <InputField
              width={'100%'}
              placeholder={'Enter 14 digit card number'}
            />
            <InputField
              width={'100%'}
              placeholder={'Expiration date  (MM-YY)'}
            />
            <InputField width={'100%'} placeholder={'Security code  (CVV)'} />
            <InputField width={'100%'} placeholder={'$14/month'} />

            <Text
              style={[
                style.textDesc,
                {
                  display: 'flex',
                },
              ]}>
              Your payments will be processed internationally, Additional bank
              fees may apply.
            </Text>
            <View style={style.rowCheck}>
              <View style={{flexDirection: 'row'}}>
                <RadioButton check={check} setCheck={setCheck} />
                <Text
                  style={[
                    style.subTotal,
                    {
                      marginLeft: widthRef * 5,
                    },
                  ]}>
                  I agree
                </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text
                  style={[
                    style.subTotal,
                    {
                      fontWeight: '800',
                      marginRight: widthRef * 10,
                    },
                  ]}>
                  Powered by
                </Text>
                <Image
                  source={require('src/Asset/Images/stripe.png')}
                  style={style.stripe}
                />
              </View>
            </View>
            <GradientButton text="Start Membership" />
          </View>
          <View style={style.container2}>
            <Text style={style.textTop2}>Plan Summary</Text>
            <View style={style.checkBox}>
              <View style={{flex: 1}}>
                <CheckText text={'Good Video Quality'} />
                <CheckText text={'720 Resolution'} />
                <CheckText text={'Cancel Anytime'} />
                <CheckText text={'Free Trial'} />
              </View>
              <View style={{flex: 1}}>
                <CheckText text={'Good Video Quality'} />
                <CheckText text={'720 Resolution'} />
                <CheckText text={'Cancel Anytime'} />
                <CheckText text={'Free Trial'} />
              </View>
            </View>

            <Text style={style.textTop2}>Purchase Summary</Text>
            <View
              style={[
                style.checkBox,
                {
                  marginTop: heightRef * 20,
                },
              ]}>
              <View style={{flex: 1}}>
                <Text style={style.title}>Customer Name</Text>
                <Text style={style.title}>Date</Text>
                <Text style={style.title}>Plan</Text>
                <Text style={style.title}>Total Due</Text>
                <Text style={style.title}>Promo Code</Text>
              </View>
              <View style={style.values}>
                <Text style={style.value}>John Dow</Text>
                <Text style={style.value}>04-04-2022</Text>
                <Text style={style.value}>Monthly</Text>
                <Text style={style.value}>$14</Text>
                <Text style={style.value}>G45F</Text>
              </View>
            </View>
            <View
              style={[
                style.checkBox,
                {
                  justifyContent: 'space-between',
                },
              ]}>
              <Text style={style.amountText}>Final Amount Due</Text>
              <Text
                style={[
                  style.amountText,
                  {
                    color: globalStyles.Theme.cyan,
                  },
                ]}>
                $12
              </Text>
            </View>
            <Text style={style.address}>
              Sonderblu, Inc. XYZ street abc street, USA
            </Text>
            <Text
              style={[
                style.textDesc,
                {
                  lineHeight: fontRef * 28,
                  display: 'flex',
                },
              ]}>
              All pricing in USD and renews automatically unless cancelled.
              Event completions count towards your total page views per month.
              If you need more than 50 sites, get in touch for pricing.
            </Text>
          </View>
        </ScrollView>
      </Gradient>
    </ImageBackground>
  );
};

export default Summary;
