import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {ScrollView} from 'react-native';
import Gradient from 'src/Components/Gradient';
import GradientButton from 'src/Components/GradientButton';
import Header from 'src/Components/Header';
import View from 'src/Components/View';
import globalStyles from 'src/config/globalStyles';
import {fullHeight} from 'src/config/screenSize';
import styles from './style';
const Home = () => {
  const nav = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Gradient
        start={{x: 0, y: 0.5}}
        end={{x: 1, y: 0}}
        colors={globalStyles.Theme.gradientGray}>
        <Header />
        <GradientButton text={'GET STARTED'} />
        <View style={{height: fullHeight - 200}} />
      </Gradient>
    </ScrollView>
  );
};

export default Home;
