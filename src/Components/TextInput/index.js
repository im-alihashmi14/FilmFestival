import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput as RNTextInput,
  TextInputProps,
} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import globalStyles from 'src/config/globalStyles';
import {fontRef, heightRef, widthRef} from 'src/config/screenSize';
import Image from '../Image';
import View from '../View';

const TextInput = ({
  icon,
  placeholder,
  placeholderTextColor = globalStyles.Theme.placeholder,
  style,
  isPassword = false,
  textColor = globalStyles.Theme.cyan,
}: TextInputProps) => {
  const [visible, setVisible] = useState(isPassword);
  return (
    <View style={[styles.main, style]}>
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
    height: heightRef * 57,
    marginVertical: heightRef * 5,
    borderRadius: heightRef * 15,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  icon: {
    height: widthRef * 30,
    width: widthRef * 30,
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
