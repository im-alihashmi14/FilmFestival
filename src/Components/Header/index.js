/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import View from '../View';
import Icon from 'react-native-dynamic-vector-icons';
import {fontRef, heightRef, isPhone, widthRef} from 'src/config/screenSize';
import globalStyles from 'src/config/globalStyles';
import GradientButton from '../GradientButton';
import OutlinedButton from '../OutlinedButton';
import Text from '../Text';
import {useNavigation, useRoute} from '@react-navigation/native';
import Drawer from '../Drawer';
import {useStyles} from './style';
const navigation = [
  {
    name: 'Home',
    route: 'Home',
  },
  {
    name: 'Search',
    route: 'Search',
  },
  {
    name: 'Home',
    route: 'Home2',
  },
  {
    name: 'Home',
    route: 'Home3',
  },
  {
    name: 'Biography',
    route: 'Biography',
  },
];

const Header = ({left, right, iconColor, onPressIcon, onlyLogo}) => {
  const route = useRoute();
  const nav = useNavigation();
  const [visible, setVisible] = useState(false);
  const style = useStyles();

  const inset = useSafeAreaInsets();
  return (
    <View
      style={[
        style.row,
        {marginTop: inset.top},
        !onlyLogo && {
          borderBottomWidth: isPhone ? 0 : heightRef,
          borderBottomColor: globalStyles.Theme.border,
        },
      ]}>
      {left ?? (
        <TouchableOpacity>
          <Image
            source={require('src/Asset/Images/logo.png')}
            style={style.logoImage}
          />
        </TouchableOpacity>
      )}
      {!onlyLogo && (
        <>
          <View style={style.items}>
            {navigation.map((item, index) => (
              <Text
                key={index.toString()}
                onPress={() => nav.navigate(item.route)}
                style={[
                  style.item,
                  {
                    color:
                      item.route === route.name
                        ? globalStyles.Theme.white
                        : globalStyles.Theme.border,
                  },
                ]}>
                {item.name}
              </Text>
            ))}
          </View>

          {right ?? (
            <>
              <Icon
                style={style.icon}
                name="md-menu-outline"
                type="Ionicons"
                size={heightRef * 30}
                color={iconColor ?? globalStyles.Theme.liteBlue}
                onPress={() => setVisible(true)}
              />
              <View
                style={[
                  style.rowRight,
                  {
                    width: 210 * widthRef,
                  },
                ]}>
                <OutlinedButton
                  text={'Login'}
                  onPress={() =>
                    nav.navigate('AuthStack', {
                      screen: 'Login',
                    })
                  }
                  textSize={fontRef * 10}
                  height={heightRef * 35}
                  width={widthRef * 100}
                />
                <GradientButton
                  text={'Signup'}
                  onPress={() =>
                    nav.navigate('AuthStack', {
                      screen: 'SignUp',
                    })
                  }
                  textSize={fontRef * 10}
                  // height={heightRef * 35}
                  width={widthRef * 100}
                />
              </View>
            </>
          )}
        </>
      )}
      <Drawer visible={visible} setVisible={setVisible} nav={nav}/>
    </View>
  );
};

export default Header;
