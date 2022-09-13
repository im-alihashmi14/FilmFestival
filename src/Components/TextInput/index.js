/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, isPhone, widthRef} from 'src/config/screenSize';
import Image from '../Image';
import View from '../View';

const TextInput = ({
  icon,
  placeholder,
  placeholderTextColor = globalStyles.Theme.placeholder,
  style,
  isPassword = false,
  textColor = globalStyles.Theme.cyan,
  width = '49%',
}: TextInputProps) => {
  const [visible, setVisible] = useState(isPassword);
  return (
    <View style={[styles.main, isPhone ? {flex: 1} : {width}, style]}>
      <Image source={icon} style={styles.icon} />
      <RNTextInput
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[
          {color: textColor},
          styles.input,
          {
            marginRight: isPassword ? widthRef * 42 : widthRef * 15,
          },
        ]}
        secureTextEntry={visible}
      />
      {isPassword ? (
        <Icon
          name={visible ? 'eye-with-line' : 'eye'}
          type="Entypo"
          size={fontRef * 14}
          color={'rgba(255, 255, 255, 0.6)'}
          style={styles.passwordIcon}
          onPress={() => setVisible(prev => !prev)}
        />
      ) : null}
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  main: {
    height: heightRef * 50,
    marginVertical: heightRef * 5,
    borderRadius: heightRef * 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    height: isPhone ? widthRef * 30 : widthRef * 24,
    width: isPhone ? widthRef * 30 : widthRef * 24,
    marginHorizontal: widthRef * 15,
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: fontRef * 14,
    fontWeight: '400',
    letterSpacing: 0.5,
  },
  passwordIcon: {
    position: 'absolute',
    right: widthRef * 18,
  },
});
