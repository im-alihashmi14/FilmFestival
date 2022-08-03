import React from 'react';
import {Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import style from './style';
import View from '../View';
import Icon from 'react-native-dynamic-vector-icons';
import {heightRef} from 'src/config/screenSize';
import globalStyles from 'src/config/globalStyles';

const Header = ({left, right, iconColor, onPressIcon}) => {
  const inset = useSafeAreaInsets();
  return (
    <View style={[style.row, {marginTop: inset.top}]}>
      {left ?? (
        <Image
          source={require('src/Asset/Images/logo.png')}
          style={style.logoImage}
        />
      )}
      {right ?? (
        <Icon
          style={style.icon}
          name="md-menu-outline"
          type="Ionicons"
          size={heightRef * 30}
          color={iconColor ?? globalStyles.Theme.liteBlue}
          onPress={onPressIcon}
        />
      )}
    </View>
  );
};

export default Header;
