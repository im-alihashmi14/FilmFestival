import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-dynamic-vector-icons';
import {makeUseStyles} from 'react-native-stylex';
import globalStyles from 'src/config/globalStyles';
import {heightRef} from 'src/config/screenSize';

const RadioButton = ({check, setCheck}) => {
  const style = useStyles();
  return (
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
  );
};

export default RadioButton;

const useStyles = makeUseStyles(({palette, utils, breakpoints}) => ({
  check: {
    height: heightRef * 20,
    width: heightRef * 20,
    backgroundColor: globalStyles.Theme.liteGreen,
    borderRadius: heightRef * 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
}));
