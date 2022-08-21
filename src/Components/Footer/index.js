import React from 'react';
import {useStyles} from './style';
import View from '../View';
import {Image} from 'react-native';
import {heightRef} from 'src/config/screenSize';
import globalStyles from 'src/config/globalStyles';
import Icon from 'react-native-dynamic-vector-icons';
import Text from '../Text';

const Footer = () => {
  const style = useStyles();
  return (
    <>
      <View style={style.main}>
        <View style={style.left}>
          <View style={style.logo}>
            <Image
              source={require('src/Asset/Images/logo.png')}
              style={style.logoImage}
            />
            <View style={style.socialLinks}>
              <Icon
                style={style.icon}
                name="facebook-f"
                type="FontAwesome"
                size={heightRef * 10}
                color={globalStyles.Theme.white}
              />
              <Icon
                style={style.icon}
                name="instagram"
                type="AntDesign"
                size={heightRef * 10}
                color={globalStyles.Theme.white}
              />
              <Icon
                style={style.icon}
                name="linkedin-square"
                type="AntDesign"
                size={heightRef * 10}
                color={globalStyles.Theme.white}
              />
              <Icon
                style={style.icon}
                name="twitter"
                type="AntDesign"
                size={heightRef * 10}
                color={globalStyles.Theme.white}
              />
              <Icon
                style={style.icon}
                name="youtube"
                type="AntDesign"
                size={heightRef * 10}
                color={globalStyles.Theme.white}
              />
            </View>
          </View>
          <Text style={style.textLeft}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            auctor eget bibendum massa a, dapibus nibh rutrum. Lectus vitae
            montes, sit amet, sed nullam amet velit. Maecenas fermentum integer
            vulputate eget nullam. Ultrices neque eros aliquet
          </Text>
        </View>
        <View style={style.border} />
        <View style={style.right}>
          <Text style={style.filmFestival}>From Film Festival</Text>
          <View style={style.row}>
            <View style={style.linkSection}>
              <Text style={style.link}>Home</Text>
              <Text style={style.link}>Contact Us</Text>
              <Text style={style.link}>Blog</Text>
            </View>
            <View style={style.linkSection}>
              <Text style={style.link}>Term & Conditions</Text>
              <Text style={style.link}>Privacy & Policies</Text>
              <Text style={style.link}>Q&A</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={style.rights}>
        <Text style={style.rightsText}>
          © 2021 Sonderblu. All Rights Reserved.
        </Text>
      </View>
    </>
  );
};

export default Footer;
