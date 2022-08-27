import {useNavigation} from '@react-navigation/native';

import React from 'react';
import {ImageBackground, ScrollView} from 'react-native';
import Asset from 'src/Asset';
import Gradient from 'src/Components/Gradient';
import Header from 'src/Components/Header';
import {isPhone} from 'src/config/screenSize';
import {useStyles} from './style';

const Summary = () => {
  const nav = useNavigation();
  const style = useStyles();
  return (
    <ImageBackground style={{flex: 1}} source={Asset.bgImage}>
      <Gradient
        colors={['#011826', '#011826F9', '#011826D0']}
        style={style.main}>
        <Header onPressIcon={() => {}} nav={nav} onlyLogo={!isPhone} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.scroll}>
          <></>
        </ScrollView>
      </Gradient>
    </ImageBackground>
  );
};

export default Summary;
