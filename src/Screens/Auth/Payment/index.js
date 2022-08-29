/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {ImageBackground, ScrollView, TextInput} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import Asset from 'src/Asset';
import Gradient from 'src/Components/Gradient';
import GradientButton from 'src/Components/GradientButton';
import Header from 'src/Components/Header';
import PaymentPlan from 'src/Components/Sliders/PaymentPlan';
import Text from 'src/Components/Text';
import Toggle from 'src/Components/Toggle';
import View from 'src/Components/View';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, isPhone, widthRef} from 'src/config/screenSize';
import {responsiveSize} from 'src/Helper/Responsive';
import {director} from 'src/JSON/home';
import {payment} from 'src/JSON/payment';
import {useStyles} from './style';

const Payment = () => {
  const style = useStyles();
  const nav = useNavigation();
  const [toggle, setToggle] = useState(false);

  return (
    <ImageBackground style={{flex: 1}} source={Asset.bgImage}>
      <Gradient
        colors={['#011826', '#011826F9', '#011826D0']}
        style={style.main}>
        <Header onPressIcon={() => {}} nav={nav} onlyLogo={!isPhone} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.scroll}>
          <Text style={style.textTop}>Choose your plan.</Text>
          <View style={{paddingLeft: widthRef * 10}}>
            <CheckText text={'No commitments, cancel anytime.'} />
            <CheckText text={'Everything on Sonder Blue for one low price.'} />
            <CheckText text={'No ads and no extra fees.'} />

            <PaymentPlan data={payment} pagingEnabled={false} />

            <Text style={style.textDesc}>
              All pricing in USD and renews automatically unless cancelled.
              Event completions count towards your total page views per month.
              If you need more than 50 sites, get in touch for pricing.
            </Text>
            <View style={style.container}>
              <View style={style.row}>
                <View style={style.toggleRow}>
                  <Text style={style.right}>Monthly</Text>
                  <Toggle toggle={toggle} setToggle={setToggle} />
                  <Text style={style.right}>Entire Festival</Text>
                </View>
                <Text style={style.left}>All plans include:</Text>
              </View>
              <View style={style.parent}>
                <View style={{flex: 0.4}}>
                  <CheckText text={'Good Video Quality'} />
                  <CheckText text={'720 Resolution'} />
                  <CheckText text={'Free Trial'} />
                  <CheckText text={'Cancel anytime'} />
                </View>
                <View style={{flex: 0.6}}>
                  <CheckText text={'Privacy lay compliance'} />
                  <CheckText text={'Join unlimited groups'} />
                  <CheckText
                    text={'You can watch on Phone | Tablet | Computer | TV'}
                  />
                </View>
              </View>
              <View style={style.bottom}>
                <View style={style.leftBottom}>
                  <Text style={style.promoText}>Have you the promo code?</Text>
                  <View style={style.rowInput}>
                    <TextInput style={style.textInput} />
                    <GradientButton
                      fontSize={
                        responsiveSize({Tablet: 14, Handset: 12}) * fontRef
                      }
                      text="Apply"
                      width={87}
                      height={38}
                    />
                  </View>
                </View>
                <View style={style.rightBottom}>
                  <Text style={style.discount}>Discounted Price</Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={style.subTotal}>{'Sub total: '}</Text>
                    <Text style={style.price}>$14</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{alignItems: 'flex-end', marginTop: heightRef * 20}}>
              <GradientButton
                text="Next"
                width={118}
                height={38}
                onPress={() => nav.navigate('PaymentSummary')}
              />
            </View>
          </View>
        </ScrollView>
      </Gradient>
    </ImageBackground>
  );
};

export default Payment;

export const CheckText = ({text}) => {
  const style = useStyles();
  return (
    <View style={style.textCheckView}>
      <Icon
        style={style.icon}
        name={'check'}
        type={'AntDesign'}
        size={heightRef * responsiveSize({Tablet: 12, Handset: 9})}
        color={globalStyles.Theme.liteBlue}
      />
      <Text style={style.textCheck}>{text}</Text>
    </View>
  );
};
